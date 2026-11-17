/* 더코 — 한국 영화 명대사·명장면 퀴즈 (정적 웹 앱, 의존성 없음) */
(function () {
  "use strict";

  var DATA = window.THEKO_DATA;
  var STORE_KEY = "theko.stats.v1";

  var MODES = [
    { id: "quote", emoji: "💬", name: "명대사", sub: "→ 영화", desc: "대사를 읽고 영화 맞히기" },
    { id: "scene", emoji: "🖼️", name: "명장면", sub: "→ 대사", desc: "장면을 보고 대사 맞히기" },
    { id: "mix",   emoji: "🎲", name: "혼합", sub: "10문제", desc: "명대사 + 명장면 섞어서" }
  ];

  var state = {
    mode: "quote",
    genre: "all",
    deck: [],
    idx: 0,
    score: 0,
    combo: 0,
    maxCombo: 0,
    answered: false,
    hintUsed: false,
    records: []
  };

  /* ───────── 저장소 ───────── */

  function loadStats() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveStats(stats) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(stats));
    } catch (e) {
      /* 저장이 막힌 브라우저에서도 퀴즈는 계속 진행 */
    }
  }

  function statKey(genre, mode) {
    return genre + ":" + mode;
  }

  /* ───────── 유틸 ───────── */

  function el(id) { return document.getElementById(id); }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function genreName(id) {
    for (var i = 0; i < DATA.genres.length; i++) {
      if (DATA.genres[i].id === id) return DATA.genres[i].name;
    }
    return "전체";
  }

  function pool(genre, type) {
    return DATA.questions.filter(function (q) {
      var inGenre = genre === "all" || q.genre === genre;
      var inType = !type || q.type === type;
      return inGenre && inType;
    });
  }

  function roundSize(mode, genre) {
    if (mode === "mix") {
      var all = pool(genre).length;
      return Math.min(10, all);
    }
    return Math.min(10, pool(genre, mode).length);
  }

  function buildDeck() {
    var size = roundSize(state.mode, state.genre);

    if (state.mode === "mix") {
      var scenes = shuffle(pool(state.genre, "scene")).slice(0, Math.min(3, size));
      var quotes = shuffle(pool(state.genre, "quote")).slice(0, Math.max(0, size - scenes.length));
      return shuffle(quotes.concat(scenes));
    }
    return shuffle(pool(state.genre, state.mode)).slice(0, size);
  }

  /* ───────── 홈 화면 ───────── */

  function renderModes() {
    var wrap = el("mode-list");
    wrap.innerHTML = "";
    MODES.forEach(function (m) {
      var b = document.createElement("button");
      b.className = "mode";
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", String(state.mode === m.id));
      b.innerHTML =
        '<span class="mode-emoji" aria-hidden="true">' + m.emoji + "</span>" +
        '<span class="mode-body"><span class="mode-name">' + m.name + '</span>' +
        '<span class="mode-sub">' + m.sub + "</span></span>" +
        '<span class="mode-check" aria-hidden="true"></span>';
      b.addEventListener("click", function () {
        state.mode = m.id;
        renderModes();
        renderGenres();
      });
      wrap.appendChild(b);
    });
    var desc = MODES.filter(function (m) { return m.id === state.mode; })[0];
    el("mode-desc").textContent = desc ? desc.desc : "";
  }

  function bestText(record) {
    if (!record || !record.plays) return "첫 도전";
    return "최고 " + record.best + "점 · " + record.bestAcc + "%";
  }

  function renderGenres() {
    var wrap = el("genre-list");
    var stats = loadStats();
    wrap.innerHTML = "";

    DATA.genres.forEach(function (g) {
      var size = roundSize(state.mode, g.id);
      var rec = stats[statKey(g.id, state.mode)];
      var b = document.createElement("button");
      b.type = "button";
      b.className = "genre" + (g.id === "all" ? " genre-all" : "");
      if (size === 0) b.dataset.empty = "true";

      if (g.id === "all") {
        b.innerHTML =
          '<span class="g-emoji" aria-hidden="true">' + g.emoji + "</span>" +
          '<span class="g-text"><span class="g-name">전체 · 랜덤</span>' +
          '<span class="g-desc">' + g.desc + '</span>' +
          '<span class="g-meta"><span class="g-count">' + size + "문제</span>" +
          '<span class="g-best">' + bestText(rec) + "</span></span></span>" +
          '<span class="g-arrow" aria-hidden="true">▶</span>';
      } else {
        b.innerHTML =
          '<span class="g-emoji" aria-hidden="true">' + g.emoji + "</span>" +
          '<span class="g-name">' + g.name + "</span>" +
          '<span class="g-desc">' + g.desc + "</span>" +
          '<span class="g-meta"><span class="g-count">' + size + "문제</span>" +
          '<span class="g-best">' + bestText(rec) + "</span></span>";
      }

      b.addEventListener("click", function () {
        if (size === 0) return;
        startRound(g.id);
      });
      wrap.appendChild(b);
    });

    el("pool-count").textContent = roundSize(state.mode, state.genre) + "문제";
  }

  function renderTotalLine() {
    var q = pool("all", "quote").length;
    var s = pool("all", "scene").length;
    el("total-line").textContent =
      "총 " + DATA.questions.length + "문제 · 명대사 " + q + " · 명장면 " + s + " (한국 영화)";
  }

  /* ───────── 퀴즈 화면 ───────── */

  function showScreen(id) {
    ["screen-home", "screen-quiz", "screen-result"].forEach(function (s) {
      el(s).classList.toggle("active", s === id);
    });
    window.scrollTo(0, 0);
  }

  function startRound(genre) {
    state.genre = genre;
    state.deck = buildDeck();
    state.idx = 0;
    state.score = 0;
    state.combo = 0;
    state.maxCombo = 0;
    state.records = [];
    if (!state.deck.length) return;
    showScreen("screen-quiz");
    renderQuestion();
  }

  function renderQuestion() {
    var q = state.deck[state.idx];
    if (!q) return;

    state.answered = false;
    state.hintUsed = false;

    el("q-index").textContent = (state.idx + 1) + " / " + state.deck.length;
    el("q-genre").textContent = genreName(state.genre) + " · " + (state.mode === "mix" ? "혼합" : state.mode === "scene" ? "명장면" : "명대사");
    el("progress-fill").style.width = ((state.idx) / state.deck.length * 100) + "%";
    updateCombo();

    el("q-type").textContent = q.type === "quote" ? "💬 명대사 → 영화 맞추기" : "🖼️ 명장면 → 대사 맞추기";
    el("q-ask").textContent = q.type === "quote"
      ? "이 대사가 나온 영화는?"
      : "이 장면에서 나온 대사는?";

    var media = el("q-media");
    media.innerHTML = "";
    if (q.type === "quote") {
      var p = document.createElement("p");
      p.className = "q-quote" + (q.quote.length > 34 ? " long" : "");
      p.textContent = q.quote;
      media.appendChild(p);
    } else {
      var box = document.createElement("div");
      box.className = "scene";
      var img = document.createElement("img");
      img.src = q.image;
      img.alt = "영화 명장면 일러스트";
      img.decoding = "sync";
      box.appendChild(img);
      var tag = document.createElement("span");
      tag.className = "scene-tag";
      tag.textContent = "SCENE";
      box.appendChild(tag);
      media.appendChild(box);
    }

    var hintBtn = el("hint-btn");
    hintBtn.disabled = false;
    hintBtn.innerHTML = '💡 힌트 보기 <span>1회</span>';
    el("hint-text").hidden = true;
    el("hint-text").textContent = "";

    var opts = el("options");
    opts.innerHTML = "";
    var longOpt = q.options.some(function (o) { return o.length > 34; });
    q.options.forEach(function (text, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "option";
      b.innerHTML =
        '<span class="badge">' + "ABCD".charAt(i) + "</span>" +
        '<span class="opt-text"></span>';
      b.querySelector(".opt-text").textContent = text;
      if (longOpt) b.classList.add("long");
      b.addEventListener("click", function () { answer(i, b); });
      opts.appendChild(b);
    });

    el("feedback").hidden = true;
    el("feedback").className = "feedback";
    el("next-btn").hidden = true;
    el("next-btn").textContent = state.idx === state.deck.length - 1 ? "결과 보기 →" : "다음 문제 →";
  }

  function updateCombo() {
    var c = el("combo");
    c.textContent = "🔥 " + state.combo;
    c.classList.toggle("hot", state.combo >= 2);
    if (state.combo > 0) {
      c.classList.remove("pop");
      void c.offsetWidth;
      c.classList.add("pop");
    }
  }

  function showHint() {
    var q = state.deck[state.idx];
    if (!q || state.answered || state.hintUsed) return;
    state.hintUsed = true;
    var hint = el("hint-text");
    hint.textContent = q.year + "년 · " + q.director + " 감독 · " + q.cast;
    hint.hidden = false;
    var b = el("hint-btn");
    b.disabled = true;
    b.innerHTML = "💡 힌트 사용함";
  }

  function correctAnswer(q) {
    return q.type === "quote" ? q.film : q.answer;
  }

  function answer(index, btn) {
    if (state.answered) return;
    var q = state.deck[state.idx];
    var chosen = q.options[index];
    var right = correctAnswer(q);
    var ok = chosen === right;
    state.answered = true;

    var buttons = el("options").querySelectorAll(".option");
    for (var i = 0; i < buttons.length; i++) {
      var b = buttons[i];
      b.disabled = true;
      var text = q.options[i];
      if (text === right) b.classList.add("correct");
      else if (b === btn) b.classList.add("wrong");
      else b.classList.add("muted");
    }

    if (ok) {
      state.score += 10;
      state.combo += 1;
      if (state.combo > state.maxCombo) state.maxCombo = state.combo;
    } else {
      state.combo = 0;
    }
    updateCombo();

    state.records.push({ q: q, chosen: chosen, correct: ok });

    var fb = el("feedback");
    fb.className = "feedback " + (ok ? "ok" : "no");
    fb.hidden = false;
    var film = q.film + " (" + q.year + ")";
    var meta = q.director + " 감독 · " + q.cast;
    fb.innerHTML =
      '<div class="fb-head">' + (ok ? "⭕ 정답!" : "❌ 아쉽네요") + "</div>" +
      '<p class="fb-film">' + escapeHtml(film) + " <span>" + escapeHtml(meta) + "</span></p>" +
      '<p class="fb-text">' + escapeHtml(q.explanation) + "</p>";

    el("next-btn").hidden = false;

    el("progress-fill").style.width = ((state.idx + 1) / state.deck.length * 100) + "%";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function next() {
    if (!state.answered) return;
    if (state.idx >= state.deck.length - 1) {
      finish();
      return;
    }
    state.idx += 1;
    renderQuestion();
  }

  /* ───────── 결과 ───────── */

  function gradeOf(acc) {
    if (acc === 1) return { title: "🏆 더코 마스터", line: "한국 영화로 밥 먹고 사는 사람" };
    if (acc >= 0.8) return { title: "🎬 시네필", line: "영화관 VIP석이 어울려요" };
    if (acc >= 0.6) return { title: "🍿 영화 덕후", line: "주말엔 무조건 영화관" };
    if (acc >= 0.4) return { title: "🎞️ 필름 수집가 지망생", line: "명작 리스트 하나 더 늘릴 때" };
    return { title: "🎟️ 팝콘 관객", line: "오늘은 팝콘이 더 맛있었죠" };
  }

  function finish() {
    var total = state.deck.length;
    var correct = state.records.filter(function (r) { return r.correct; }).length;
    var acc = total ? Math.round(correct / total * 100) : 0;
    var grade = gradeOf(total ? correct / total : 0);

    var stats = loadStats();
    var key = statKey(state.genre, state.mode);
    var prev = stats[key] || { plays: 0, best: 0, bestAcc: 0 };
    var prevBest = prev.best;
    var prevPlays = prev.plays;

    stats[key] = {
      plays: prevPlays + 1,
      best: Math.max(prevBest, state.score),
      bestAcc: Math.max(prev.bestAcc || 0, acc),
      last: state.score,
      lastAcc: acc
    };
    saveStats(stats);

    el("r-score").textContent = state.score;
    el("r-grade").textContent = grade.title;
    el("r-sub").textContent =
      total + "문제 중 " + correct + "문제 정답 · 정답률 " + acc + "%" +
      (state.maxCombo >= 2 ? " · 최고 " + state.maxCombo + "연속 정답" : "");
    el("score-ring").style.setProperty("--pct", acc);

    var best = el("r-best");
    if (prevPlays > 0 && state.score > prevBest) {
      best.textContent = "🏅 최고 기록 갱신! (이전 " + prevBest + "점)";
    } else if (prevPlays > 0) {
      best.textContent = grade.line + " · 장르 최고 " + Math.max(prevBest, state.score) + "점";
    } else {
      best.textContent = grade.line + " · 첫 기록 저장됨";
    }

    var wrong = state.records.filter(function (r) { return !r.correct; });
    el("wrong-count").textContent = wrong.length ? wrong.length + "문제" : "없음";

    var review = el("review");
    review.innerHTML = "";
    if (!wrong.length) {
      var empty = document.createElement("div");
      empty.className = "review-empty";
      empty.textContent = "틀린 문제가 없습니다. 완벽해요! 🏆";
      review.appendChild(empty);
    } else {
      wrong.forEach(function (r) {
        var q = r.q;
        var d = document.createElement("details");
        d.className = "review-item";
        var chosenText = q.type === "quote" ? r.chosen : "“" + r.chosen + "”";
        var head = document.createElement("summary");
        head.innerHTML = '<span class="rv-no">오답</span><span class="rv-q"></span>';
        head.querySelector(".rv-q").textContent =
          q.type === "quote" ? q.quote : q.film + " 명장면";
        var body = document.createElement("div");
        body.className = "rv-body";
        body.innerHTML =
          '<div class="rv-line">내 답: <span class="rv-chosen"></span></div>' +
          '<div class="rv-film">' + escapeHtml(q.film + " (" + q.year + ")") + "</div>" +
          '<div class="rv-answer"></div>' +
          '<div class="rv-text">' + escapeHtml(q.explanation) + "</div>";
        body.querySelector(".rv-chosen").textContent = chosenText;
        body.querySelector(".rv-answer").textContent =
          q.type === "quote" ? "정답 영화: " + correctAnswer(q) : "정답 대사: “" + correctAnswer(q) + "”";
        d.appendChild(head);
        d.appendChild(body);
        review.appendChild(d);
      });
    }

    showScreen("screen-result");
    renderGenres();
  }

  /* ───────── 공유 ───────── */

  function shareResult() {
    var total = state.deck.length;
    var correct = state.records.filter(function (r) { return r.correct; }).length;
    var acc = total ? Math.round(correct / total * 100) : 0;
    var grade = gradeOf(total ? correct / total : 0);
    var modeName = state.mode === "quote" ? "명대사" : state.mode === "scene" ? "명장면" : "혼합";
    var text =
      "더코 — 한국 영화 명대사·명장면 퀴즈\n" +
      genreName(state.genre) + " · " + modeName + " " + total + "문제\n" +
      state.score + "점 (" + correct + "/" + total + ") · " + grade.title + "\n" +
      "너는 몇 점 나올까?";
    var url = location.origin + location.pathname;

    if (navigator.share) {
      navigator.share({ title: "더코", text: text, url: url }).catch(function () {});
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text + "\n" + url).then(function () {
        var b = el("share");
        var old = b.textContent;
        b.textContent = "복사 완료 ✓";
        setTimeout(function () { b.textContent = old; }, 1600);
      }).catch(function () {});
    }
  }

  /* ───────── 초기화 ───────── */

  function bind() {
    el("hint-btn").addEventListener("click", showHint);
    el("next-btn").addEventListener("click", next);
    el("quit").addEventListener("click", function () {
      showScreen("screen-home");
      renderGenres();
    });
    el("retry").addEventListener("click", function () { startRound(state.genre); });
    el("home").addEventListener("click", function () {
      showScreen("screen-home");
      renderGenres();
    });
    el("share").addEventListener("click", shareResult);
    el("reset-stats").addEventListener("click", function () {
      if (window.confirm("저장된 최고 기록을 모두 지울까요?")) {
        saveStats({});
        renderGenres();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (!el("screen-quiz").classList.contains("active")) return;
      if (e.key >= "1" && e.key <= "4") {
        var btns = el("options").querySelectorAll(".option");
        var i = Number(e.key) - 1;
        if (btns[i] && !btns[i].disabled) btns[i].click();
      } else if (e.key === "Enter" && !el("next-btn").hidden) {
        next();
      }
    });
  }

  function init() {
    renderModes();
    renderGenres();
    renderTotalLine();
    bind();
    document.title = DATA.title + " — " + DATA.subtitle;
  }

  init();
})();
