/* 더코 — 한국 영화 명대사·명장면 퀴즈 문제 은행
 * 5개 장르 × (명대사 10 + 명장면 3) = 65문제
 * 모든 대사는 실제 한국 영화 대사입니다. (개봉연도·감독·주연은 힌트로 사용)
 */
window.THEKO_DATA = {
  title: "더코",
  subtitle: "한국 영화 명대사·명장면 퀴즈",
  genres: [
    { id: "all",   name: "전체",        emoji: "🎬", desc: "전 장르 랜덤" },
    { id: "crime", name: "범죄·느와르", emoji: "🕵️", desc: "피도 눈물도 없는 판" },
    { id: "comedy", name: "코미디·휴먼", emoji: "🍗", desc: "웃다가 울다가" },
    { id: "romance", name: "로맨스·멜로", emoji: "🌧️", desc: "첫사랑과 이별" },
    { id: "action", name: "액션·스릴러", emoji: "🔥", desc: "심장이 먼저 뛴다" },
    { id: "drama", name: "드라마·사극", emoji: "🎭", desc: "시대를 관통한 한 줄" }
  ],
  questions: [
    /* ───────────── 범죄·느와르 : 명대사 ───────────── */
    {
      id: "crime-q1", genre: "crime", type: "quote",
      film: "신세계", year: 2013, director: "박훈정", cast: "최민식·이정재·황정민",
      quote: "살려는 드릴게.",
      options: ["신세계", "타짜", "범죄도시", "내부자들"],
      explanation: "골드문 회장 사망 뒤 후계 다툼에서 이중구(박성웅)가 정청(황정민)을 압박하며 던진 한마디. 협박과 제안이 한 문장에 겹쳐, 조직의 냉혹한 권력 다툼을 한 번에 보여줍니다."
    },
    {
      id: "crime-q2", genre: "crime", type: "quote",
      film: "범죄도시", year: 2017, director: "강윤성", cast: "마동석·윤계상",
      quote: "진실의 방으로.",
      options: ["부당거래", "범죄도시", "추격자", "친구"],
      explanation: "조사를 시작하기 전 마석도(마동석)가 취조실로 데려가며 하는 말. 시리즈를 통틀어 가장 많이 회자된 유행어가 됐습니다."
    },
    {
      id: "crime-q3", genre: "crime", type: "quote",
      film: "타짜", year: 2006, director: "최동훈", cast: "조승우·김혜수·백윤식",
      quote: "손은 눈보다 빠르다.",
      options: ["타짜", "신세계", "달콤한 인생", "범죄와의 전쟁"],
      explanation: "평경장(백윤식)이 고니(조승우)에게 화투 기술을 가르치며 남긴 말. 영화의 도박 액션을 관통하는 일종의 주문 같은 대사입니다."
    },
    {
      id: "crime-q4", genre: "crime", type: "quote",
      film: "살인의 추억", year: 2003, director: "봉준호", cast: "송강호·김상경",
      quote: "밥은 먹고 다니냐?",
      options: ["추격자", "살인의 추억", "곡성", "황해"],
      explanation: "박두만(송강호)이 용의자에게 건네는 말. 송강호의 애드리브로 알려져 있고, 한국영상자료원이 꼽은 '한국영화를 만든 대사 100선'에도 들어 있습니다."
    },
    {
      id: "crime-q5", genre: "crime", type: "quote",
      film: "베테랑", year: 2015, director: "류승완", cast: "황정민·유아인",
      quote: "우리가 돈이 없지, 가오가 없어?",
      options: ["내부자들", "베테랑", "범죄도시", "부당거래"],
      explanation: "돈보다 자존심을 앞세우는 서도철(황정민)의 한마디. 류승완 감독이 지인의 말을 그대로 대사로 옮겼다고 알려진, 영화를 대표하는 사이다 대사입니다."
    },
    {
      id: "crime-q6", genre: "crime", type: "quote",
      film: "내부자들", year: 2015, director: "우민호", cast: "이병헌·백윤식·조승우",
      quote: "어차피 대중들은 개돼지입니다.",
      options: ["서울의 봄", "내부자들", "부당거래", "남산의 부장들"],
      explanation: "권력과 언론이 짜고치는 판에서 대중을 깔보는 속내를 그대로 드러낸 대사. 영화의 냉소가 가장 날카롭게 튀어나온 장면입니다."
    },
    {
      id: "crime-q7", genre: "crime", type: "quote",
      film: "부당거래", year: 2010, director: "류승완", cast: "황정민·류승범·유해진",
      quote: "호의가 계속되면은 그게 권리인 줄 알아요.",
      options: ["부당거래", "타짜", "친구", "추격자"],
      explanation: "경찰·검찰·기업이 얽힌 거래에서 '베푼 것'이 어느 순간 당연한 권리가 되어버리는 관계를 찌르는 대사."
    },
    {
      id: "crime-q8", genre: "crime", type: "quote",
      film: "추격자", year: 2008, director: "나홍진", cast: "김윤석·하정우",
      quote: "야, 4885 너지?",
      options: ["황해", "추격자", "살인의 추억", "악마를 보았다"],
      explanation: "엄중호(김윤석)가 지영민(하정우)의 차량 번호를 확인하며 부르는 장면. 4885는 이 영화의 상징이 됐습니다."
    },
    {
      id: "crime-q9", genre: "crime", type: "quote",
      film: "달콤한 인생", year: 2005, director: "김지운", cast: "이병헌·김영철·신민아",
      quote: "넌 나에게 모욕감을 줬어.",
      options: ["달콤한 인생", "신세계", "타짜", "친구"],
      explanation: "충성을 따르던 선우(이병헌)를 죽이려는 회장이 남긴 말. 조직의 의리 뒤통수를 한 문장으로 정리한 대사입니다."
    },
    {
      id: "crime-q10", genre: "crime", type: "quote",
      film: "친구", year: 2001, director: "곽경택", cast: "유오성·장동건",
      quote: "니가 가라 하와이.",
      options: ["친구", "범죄와의 전쟁", "타짜", "신세계"],
      explanation: "동수(장동건)의 하와이 이민을 두고 친구들이 주고받은 말. 이후 가장 유명한 한국영화 유행어 중 하나가 됐습니다."
    },

    /* ───────────── 범죄·느와르 : 명장면 ───────────── */
    {
      id: "crime-s1", genre: "crime", type: "scene",
      film: "신세계", year: 2013, director: "박훈정", cast: "최민식·이정재·황정민",
      image: "assets/scenes/crime-01.jpg",
      answer: "독하게 굴어. 그래야 네가 살아.",
      options: [
        "독하게 굴어. 그래야 네가 살아.",
        "호의가 계속되면은 그게 권리인 줄 알아요.",
        "넌 나에게 모욕감을 줬어.",
        "어차피 대중들은 개돼지입니다."
      ],
      explanation: "빗물에 젖은 옥상, 죽음을 앞둔 정청(황정민)이 자성(이정재)에게 남긴 마지막 당부."
    },
    {
      id: "crime-s2", genre: "crime", type: "scene",
      film: "타짜", year: 2006, director: "최동훈", cast: "조승우·김혜수·백윤식",
      image: "assets/scenes/crime-02.jpg",
      answer: "묻고 더블로 가!",
      options: [
        "묻고 더블로 가!",
        "손은 눈보다 빠르다.",
        "야, 4885 너지?",
        "진실의 방으로."
      ],
      explanation: "곽철용(김윤석)이 판돈을 두 배로 키우며 외치는 말. 이후 예능에서도 계속 쓰이는 유행어가 됐습니다."
    },
    {
      id: "crime-s3", genre: "crime", type: "scene",
      film: "범죄도시", year: 2017, director: "강윤성", cast: "마동석·윤계상",
      image: "assets/scenes/crime-03.jpg",
      answer: "어, 아직 싱글이야.",
      options: [
        "어, 아직 싱글이야.",
        "밥은 먹고 다니냐?",
        "니가 가라 하와이.",
        "우리가 돈이 없지, 가오가 없어?"
      ],
      explanation: "장첸(윤계상)이 '혼자야?'라고 묻자 마석도(마동석)가 받아친 애드리브. 두 배우의 즉흥 연기로 탄생한 명장면입니다."
    },

    /* ───────────── 코미디·휴먼 : 명대사 ───────────── */
    {
      id: "comedy-q1", genre: "comedy", type: "quote",
      film: "기생충", year: 2019, director: "봉준호", cast: "송강호·이선균·조여정",
      quote: "가장 완벽한 계획이 뭔지 알아? 무계획이야.",
      options: ["기생충", "극한직업", "7번방의 선물", "써니"],
      explanation: "물에 잠긴 체육관에서 기택(송강호)이 아들 기우에게 하는 말. 계획이 무너지는 삶을 살아온 아버지의 체념이 영화 전체를 관통합니다."
    },
    {
      id: "comedy-q2", genre: "comedy", type: "quote",
      film: "기생충", year: 2019, director: "봉준호", cast: "송강호·이선균·조여정",
      quote: "김기사 그 양반, 선을 넘을 듯 말 듯 하면서 절대 넘지 않아. 근데, 냄새가 선을 넘지.",
      options: ["내 아내의 모든 것", "기생충", "극한직업", "과속스캔들"],
      explanation: "박 사장(이선균)의 술자리 대사. 지워지지 않는 계급의 흔적을 '냄새'로 옮긴 장면으로 유명합니다."
    },
    {
      id: "comedy-q3", genre: "comedy", type: "quote",
      film: "기생충", year: 2019, director: "봉준호", cast: "송강호·이선균·조여정",
      quote: "부자니까 착한 거지.",
      options: ["기생충", "써니", "수상한 그녀", "7번방의 선물"],
      explanation: "충숙(장혜진)이 남편 기택의 말을 정정하며 하는 대사. '돈이 다리미'라는 말과 함께 영화의 주제를 가장 짧게 요약한 문장입니다."
    },
    {
      id: "comedy-q4", genre: "comedy", type: "quote",
      film: "극한직업", year: 2019, director: "이병헌", cast: "류승룡·이하늬·신하균·공명",
      quote: "지금까지 이런 맛은 없었다. 이것은 갈비인가 통닭인가? 네, 수원 왕갈비 통닭입니다.",
      options: ["극한직업", "기생충", "과속스캔들", "웰컴 투 동막골"],
      explanation: "마약반 형사들이 통닭집 사장이 되어 받는 주문 전화. 경찰인지 사장인지 모를 고반장(류승룡)의 목소리가 영화의 대표 장면이 됐습니다."
    },
    {
      id: "comedy-q5", genre: "comedy", type: "quote",
      film: "극한직업", year: 2019, director: "이병헌", cast: "류승룡·이하늬·신하균·공명",
      quote: "내가 너보다 못생겼다고?",
      options: ["과속스캔들", "극한직업", "써니", "내 아내의 모든 것"],
      explanation: "마 형사(진선규)가 자신의 외모를 비하한 조직원에게 진심으로 분노하는 대사. 표정 연기까지 더해져 가장 많이 웃긴 장면으로 꼽힙니다."
    },
    {
      id: "comedy-q6", genre: "comedy", type: "quote",
      film: "극한직업", year: 2019, director: "이병헌", cast: "류승룡·이하늬·신하균·공명",
      quote: "반장님의 설자리를 위해서 결혼은 다음 생에 하겠습니다.",
      options: ["극한직업", "7번방의 선물", "국가대표", "수상한 그녀"],
      explanation: "막내 재훈(공명)이 통닭집 인수 자금을 대려고 결혼 적금을 깨며 하는 말. 뜬금없는 충성심이 웃음과 짠함을 동시에 만듭니다."
    },
    {
      id: "comedy-q7", genre: "comedy", type: "quote",
      film: "7번방의 선물", year: 2013, director: "이환경", cast: "류승룡·갈소원·오달수",
      quote: "예승이 콩 먹어, 콩! 비타민!",
      options: ["7번방의 선물", "기생충", "과속스캔들", "써니"],
      explanation: "6살 지능의 아빠 용구(류승룡)가 딸 예승에게 건네는 말. 류승룡의 애드리브로 알려진 장면입니다."
    },
    {
      id: "comedy-q8", genre: "comedy", type: "quote",
      film: "써니", year: 2011, director: "강형철", cast: "유호정·심은경·강소라",
      quote: "그냥 살지 마. 내 몫까지, 잘 살다 와.",
      options: ["써니", "수상한 그녀", "7번방의 선물", "내 아내의 모든 것"],
      explanation: "병으로 먼저 떠나는 나미에게 춘화가 건네는 말. 25년 만에 다시 모인 써니 멤버들의 시간이 한 문장에 겹칩니다."
    },
    {
      id: "comedy-q9", genre: "comedy", type: "quote",
      film: "내 아내의 모든 것", year: 2012, director: "민규동", cast: "임수정·이선균·류승룡",
      quote: "난 예뻤고 넌 멋졌고, 우리 아름다웠잖아.",
      options: ["건축학개론", "내 아내의 모든 것", "봄날은 간다", "미술관 옆 동물원"],
      explanation: "지루해진 부부의 시간을 되돌리고 싶은 정인(임수정)의 대사. 별것 아닌 말인데도 오래 남는 문장으로 꼽힙니다."
    },
    {
      id: "comedy-q10", genre: "comedy", type: "quote",
      film: "기생충", year: 2019, director: "봉준호", cast: "송강호·이선균·조여정",
      quote: "믿는 사람 소개로 연결 연결, 이게 베스트인 것 같아요. 일종의 뭐랄까… 믿음의 벨트?",
      options: ["기생충", "극한직업", "내부자들", "써니"],
      explanation: "연교(조여정)가 가짜 과외 선생들을 소개받으며 하는 말. '믿음의 벨트'는 한국영상자료원 명대사 100선에 꼽힌 대사입니다."
    },

    /* ───────────── 코미디·휴먼 : 명장면 ───────────── */
    {
      id: "comedy-s1", genre: "comedy", type: "scene",
      film: "기생충", year: 2019, director: "봉준호", cast: "송강호·이선균·조여정",
      image: "assets/scenes/comedy-01.jpg",
      answer: "아버지는 계단만 올라오시면 돼요.",
      options: [
        "아버지는 계단만 올라오시면 돼요.",
        "예승이 콩 먹어, 콩! 비타민!",
        "내 몫까지, 잘 살다 와.",
        "난 예뻤고 넌 멋졌고, 우리 아름다웠잖아."
      ],
      explanation: "반지하 집의 창가, 기우(최우식)가 아버지에게 집을 사겠다는 계획을 말하며 하는 대사. '계단'은 영화 속 계급의 상징입니다."
    },
    {
      id: "comedy-s2", genre: "comedy", type: "scene",
      film: "극한직업", year: 2019, director: "이병헌", cast: "류승룡·이하늬·신하균·공명",
      image: "assets/scenes/comedy-02.jpg",
      answer: "왜 이렇게 장사가 잘 되는데!",
      options: [
        "왜 이렇게 장사가 잘 되는데!",
        "지금까지 이런 맛은 없었다.",
        "반장님의 설자리를 위해서 결혼은 다음 생에 하겠습니다.",
        "내가 너보다 못생겼다고?"
      ],
      explanation: "마약 조직을 잡으러 왔다가 통닭이 너무 잘 팔리자 영호(이동휘)가 소리치는 장면. 본업보다 부업이 잘 되는 아이러니가 폭발합니다."
    },
    {
      id: "comedy-s3", genre: "comedy", type: "scene",
      film: "7번방의 선물", year: 2013, director: "이환경", cast: "류승룡·갈소원·오달수",
      image: "assets/scenes/comedy-03.jpg",
      answer: "아빠, 태어나게 해주셔서 감사합니다.",
      options: [
        "아빠, 태어나게 해주셔서 감사합니다.",
        "아버지는 계단만 올라오시면 돼요.",
        "예승이 콩 먹어, 콩! 비타민!",
        "그냥 살지 마. 내 몫까지, 잘 살다 와."
      ],
      explanation: "교도소 접견실, 예승(갈소원)이 아빠 용구(류승룡)에게 남긴 말. 영화의 대표 눈물 버튼 대사입니다."
    },

    /* ───────────── 로맨스·멜로 : 명대사 ───────────── */
    {
      id: "romance-q1", genre: "romance", type: "quote",
      film: "봄날은 간다", year: 2001, director: "허진호", cast: "유지태·이영애",
      quote: "어떻게 사랑이 변하니?",
      options: ["봄날은 간다", "8월의 크리스마스", "클래식", "건축학개론"],
      explanation: "이별을 말하는 은수(이영애)에게 상우(유지태)가 되묻는 말. 한국영상자료원 명대사 100선에 꼽힌, 이별의 정서를 대표하는 문장입니다."
    },
    {
      id: "romance-q2", genre: "romance", type: "quote",
      film: "8월의 크리스마스", year: 1998, director: "허진호", cast: "한석규·심은하",
      quote: "아저씨는 왜 나만 보면 웃어요?",
      options: ["봄날은 간다", "8월의 크리스마스", "내 머리 속의 지우개", "미술관 옆 동물원"],
      explanation: "주차단속요원 다림(심은하)이 사진관 주인 정원(한석규)에게 던지는 말. 여름의 사진관에서 시작되는 담담한 사랑의 첫 장면입니다."
    },
    {
      id: "romance-q3", genre: "romance", type: "quote",
      film: "건축학개론", year: 2012, director: "이용주", cast: "엄태웅·한가인·이제훈·수지",
      quote: "다 컸어, 잘 컸어.",
      options: ["건축학개론", "써니", "봄날은 간다", "내 아내의 모든 것"],
      explanation: "승민의 절친 납뜩이(조정석)의 대사. 조정석을 단숨에 스타로 만든, 20대의 서툰 연애를 대표하는 말이 됐습니다."
    },
    {
      id: "romance-q4", genre: "romance", type: "quote",
      film: "내 머리 속의 지우개", year: 2004, director: "이재한", cast: "정우성·손예진",
      quote: "이거 마시면 우리 사귀는 거다?",
      options: ["클래식", "내 머리 속의 지우개", "건축학개론", "미술관 옆 동물원"],
      explanation: "철수(정우성)가 수진(손예진)에게 건네는 첫 고백. '안 마시면? 볼 일 없는 거지, 죽을 때까지'로 이어지는 장면이 유명합니다."
    },
    {
      id: "romance-q5", genre: "romance", type: "quote",
      film: "클래식", year: 2003, director: "곽재용", cast: "손예진·조승우·조인성",
      quote: "가끔은, 우산이 있어도 비를 맞고 싶어질 때가 있다.",
      options: ["8월의 크리스마스", "클래식", "봄날은 간다", "뷰티 인사이드"],
      explanation: "지혜의 나레이션으로 알려진 문장. 두 세대의 사랑을 겹쳐 놓은 영화의 정서를 한 줄로 담았습니다."
    },
    {
      id: "romance-q6", genre: "romance", type: "quote",
      film: "미술관 옆 동물원", year: 1998, director: "이정향", cast: "심은하·이성재",
      quote: "사랑이라는 게, 처음부터 풍덩 빠지는 줄만 알았지. 이렇게 서서히 물들어 버릴 수 있는 건지는 몰랐어.",
      options: ["미술관 옆 동물원", "내 머리 속의 지우개", "클래식", "건축학개론"],
      explanation: "같은 집을 쓰게 된 두 남녀가 서로에게 서서히 스며드는 과정을 담은 대사. 90년대 멜로의 머뭇거림이 그대로 남아 있습니다."
    },
    {
      id: "romance-q7", genre: "romance", type: "quote",
      film: "뷰티 인사이드", year: 2015, director: "백종열", cast: "한효주·박서준·이범수",
      quote: "네가 어떤 모습이라도 괜찮아. 난 이 안의 김우진을 사랑하는 거니까.",
      options: ["뷰티 인사이드", "봄날은 간다", "아가씨", "헤어질 결심"],
      explanation: "매일 다른 얼굴로 깨어나는 우진을 사랑하는 이수(한효주)의 대사. 한효주가 직접 쓴 문장이 영화 대사가 된 것으로 알려져 있습니다."
    },
    {
      id: "romance-q8", genre: "romance", type: "quote",
      film: "아가씨", year: 2016, director: "박찬욱", cast: "김민희·김태리·조진웅",
      quote: "내 인생을 망치러 온 나의 구원자, 나의 타마코, 나의 숙희.",
      options: ["헤어질 결심", "아가씨", "뷰티 인사이드", "미술관 옆 동물원"],
      explanation: "숙희의 나레이션. 사기를 치러 온 관계가 사랑으로 뒤집히는 순간을, 이름을 세 번 부르는 문장으로 남겼습니다."
    },
    {
      id: "romance-q9", genre: "romance", type: "quote",
      film: "헤어질 결심", year: 2022, director: "박찬욱", cast: "탕웨이·박해일",
      quote: "가인이한테… 나 너 땜에 고생깨나 했지만, 사실 너 아니었으면 내 인생 공허했다, 요렇게 좀 전해주세요.",
      options: ["아가씨", "헤어질 결심", "봄날은 간다", "8월의 크리스마스"],
      explanation: "해준(박해일)이 서래에게 남기는 마지막 말. 수사와 사랑이 뒤섞인 영화의 결말을 가장 사적인 문장으로 닫습니다."
    },
    {
      id: "romance-q10", genre: "romance", type: "quote",
      film: "봄날은 간다", year: 2001, director: "허진호", cast: "유지태·이영애",
      quote: "라면 먹을래요?",
      options: ["8월의 크리스마스", "봄날은 간다", "클래식", "내 머리 속의 지우개"],
      explanation: "상우가 은수에게 건네는 말 한마디. 별것 아닌 제안이 로맨스의 시작이 되는 장면으로, 지금도 회자되는 '작업 멘트'입니다."
    },

    /* ───────────── 로맨스·멜로 : 명장면 ───────────── */
    {
      id: "romance-s1", genre: "romance", type: "scene",
      film: "8월의 크리스마스", year: 1998, director: "허진호", cast: "한석규·심은하",
      image: "assets/scenes/romance-01.jpg",
      answer: "내 기억 속에 무수한 사진들처럼, 사랑도 언젠가는 추억으로 그친다는 걸 난 알고 있었습니다. 하지만 당신만은 추억이 되질 않았습니다.",
      options: [
        "내 기억 속에 무수한 사진들처럼, 사랑도 언젠가는 추억으로 그친다는 걸 난 알고 있었습니다. 하지만 당신만은 추억이 되질 않았습니다.",
        "어떻게 사랑이 변하니?",
        "익숙해지려면 하루가 너무 짧아요.",
        "이제 그만 꺼져줄래."
      ],
      explanation: "여름의 사진관, 정원(한석규)이 다림에게 남기고 떠난 마지막 인사. 시간이 얼마 남지 않은 사람의 사랑을 담담하게 기록한 나레이션입니다."
    },
    {
      id: "romance-s2", genre: "romance", type: "scene",
      film: "건축학개론", year: 2012, director: "이용주", cast: "엄태웅·한가인·이제훈·수지",
      image: "assets/scenes/romance-02.jpg",
      answer: "이제 그만 꺼져줄래.",
      options: [
        "이제 그만 꺼져줄래.",
        "다 컸어, 잘 컸어.",
        "네가 어떤 모습이라도 괜찮아.",
        "라면 먹을래요?"
      ],
      explanation: "빈집 앞에서 서연에게 마음과 반대로 차갑게 내뱉은 승민(이제훈)의 말. 첫사랑이 어긋나는 순간입니다."
    },
    {
      id: "romance-s3", genre: "romance", type: "scene",
      film: "뷰티 인사이드", year: 2015, director: "백종열", cast: "한효주·박서준·이범수",
      image: "assets/scenes/romance-03.jpg",
      answer: "익숙해지려면 하루가 너무 짧아요.",
      options: [
        "익숙해지려면 하루가 너무 짧아요.",
        "어떻게 사랑이 변하니?",
        "가끔은, 우산이 있어도 비를 맞고 싶어질 때가 있다.",
        "사랑이라는 게, 처음부터 풍덩 빠지는 줄만 알았지."
      ],
      explanation: "매일 다른 모습의 우진을 만나야 하는 이수(한효주)의 독백. 사랑의 조건과 하루의 길이를 견주는 문장입니다."
    },

    /* ───────────── 액션·스릴러 : 명대사 ───────────── */
    {
      id: "action-q1", genre: "action", type: "quote",
      film: "서울의 봄", year: 2023, director: "김성수", cast: "황정민·정우성·이성민",
      quote: "이 정도 각오도 안 했습니까? 실패하면 반역, 성공하면 혁명 아닙니까!",
      options: ["서울의 봄", "남산의 부장들", "1987", "택시운전사"],
      explanation: "12·12 군사반란의 밤, 전두광(황정민)이 반란군을 향해 던진 말. 영화의 분노를 상징하는 대사로 1000만 관객에게 남았습니다."
    },
    {
      id: "action-q2", genre: "action", type: "quote",
      film: "부산행", year: 2016, director: "연상호", cast: "공유·마동석·정유미",
      quote: "지금 같은 때에는 자기 자신이 제일 우선이야.",
      options: ["부산행", "아저씨", "괴물", "서울의 봄"],
      explanation: "재난 초반, 석우(공유)가 딸 수안에게 하는 말. 이기적인 아빠가 조금씩 변해가는 영화의 출발점입니다."
    },
    {
      id: "action-q3", genre: "action", type: "quote",
      film: "부산행", year: 2016, director: "연상호", cast: "공유·마동석·정유미",
      quote: "아빠들은 원래 맨날 욕 먹고 인정 못 받고 그래도 뭐 희생하고 사는 거지, 안 그래?",
      options: ["아저씨", "부산행", "국제시장", "태극기 휘날리며"],
      explanation: "상화(마동석)가 석우에게 건네는 위로. 좀비 영화 안에서 아빠들의 서사를 한 문장으로 꺼내 놓은 대사입니다."
    },
    {
      id: "action-q4", genre: "action", type: "quote",
      film: "아저씨", year: 2010, director: "이정범", cast: "원빈·김새론",
      quote: "금이빨 빼고 모조리 씹어 먹어줄게.",
      options: ["아저씨", "범죄도시", "신세계", "추격자"],
      explanation: "소미를 잃은 태식(원빈)이 조직을 향해 내뱉는 말. 조용하던 남자가 되돌아온 과거로 폭발하는 지점입니다."
    },
    {
      id: "action-q5", genre: "action", type: "quote",
      film: "곡성", year: 2016, director: "나홍진", cast: "곽도원·황정민·천우희",
      quote: "뭣이 중허냐고?",
      options: ["곡성", "추격자", "황해", "아저씨"],
      explanation: "종구(곽도원)가 딸을 살리기 위해 무당 일광(황정민)에게 매달리며 되묻는 말. 경상도 사투리와 절박함이 겹쳐 밈이 됐습니다."
    },
    {
      id: "action-q6", genre: "action", type: "quote",
      film: "불한당: 나쁜 놈들의 세상", year: 2017, director: "변성현", cast: "설경구·임시완",
      quote: "야아, 자기는 멍도 예쁘게 든다.",
      options: ["불한당: 나쁜 놈들의 세상", "신세계", "달콤한 인생", "아저씨"],
      explanation: "재호(설경구)가 다친 현수(임시완)를 보며 건네는 말. 조직 느와르 안에 숨어 있는 애정이 이상하게 오래 남는 대사입니다."
    },
    {
      id: "action-q7", genre: "action", type: "quote",
      film: "쉬리", year: 1999, director: "강제규", cast: "한석규·최민식·김윤진",
      quote: "…다른 사람 보내.",
      options: ["쉬리", "공동경비구역 JSA", "태극기 휘날리며", "베를린"],
      explanation: "쉬리의 결말에 남는 마지막 한마디. 남북 특수요원의 관계와 임무가 뒤엉킨 영화를 짧게 닫는 대사입니다."
    },
    {
      id: "action-q8", genre: "action", type: "quote",
      film: "범죄도시2", year: 2022, director: "이상용", cast: "마동석·손석구",
      quote: "아 이유가 어디 있어, 사람 죽인 새끼 잡는데?",
      options: ["범죄도시2", "범죄도시", "베테랑", "서울의 봄"],
      explanation: "타지에서까지 수사하는 이유를 묻는 질문에 마석도(마동석)가 답하는 말. 시리즈 특유의 직진이 가장 선명하게 드러납니다."
    },
    {
      id: "action-q9", genre: "action", type: "quote",
      film: "명량", year: 2014, director: "김한민", cast: "최민식·류승룡·조진웅",
      quote: "살고자 하면 필히 죽을 것이요, 죽고자 하면 살 것이다.",
      options: ["명량", "광해, 왕이 된 남자", "왕의 남자", "사도"],
      explanation: "난중일기의 '필사즉생 필생즉사'를 풀어낸 대사. 12척의 배로 330척에 맞서는 결전 전, 이순신(최민식)의 각오입니다."
    },
    {
      id: "action-q10", genre: "action", type: "quote",
      film: "명량", year: 2014, director: "김한민", cast: "최민식·류승룡·조진웅",
      quote: "무릇 장수된 자의 의리는 충을 좇아야 하고, 충은 백성을 향해야 한다.",
      options: ["명량", "광해, 왕이 된 남자", "남한산성", "천문: 하늘에 묻는다"],
      explanation: "왕의 회군 명령 앞에서 이순신이 남긴 말. 충의 방향을 왕이 아니라 백성에게 두는 장면입니다."
    },

    /* ───────────── 액션·스릴러 : 명장면 ───────────── */
    {
      id: "action-s1", genre: "action", type: "scene",
      film: "부산행", year: 2016, director: "연상호", cast: "공유·마동석·정유미",
      image: "assets/scenes/action-01.jpg",
      answer: "이 사람들 빨리 내보내야 돼! 안 그러면 우리까지 위험해져!",
      options: [
        "이 사람들 빨리 내보내야 돼! 안 그러면 우리까지 위험해져!",
        "지금 같은 때에는 자기 자신이 제일 우선이야.",
        "아빠들은 원래 맨날 욕 먹고 인정 못 받고 그래도 뭐 희생하고 사는 거지.",
        "살고자 하면 필히 죽을 것이요, 죽고자 하면 살 것이다."
      ],
      explanation: "좀비가 들끓는 KTX 안, 용석(김의성)이 다른 칸 사람들을 막아서며 외치는 말. 재난 속 인간의 민낯이 드러나는 장면입니다."
    },
    {
      id: "action-s2", genre: "action", type: "scene",
      film: "명량", year: 2014, director: "김한민", cast: "최민식·류승룡·조진웅",
      image: "assets/scenes/action-02.jpg",
      answer: "신에게는 아직 열두 척의 배가 남아 있사옵니다.",
      options: [
        "신에게는 아직 열두 척의 배가 남아 있사옵니다.",
        "무릇 장수된 자의 의리는 충을 좇아야 하고, 충은 백성을 향해야 한다.",
        "오늘 밤 서울은 끝까지 우리 부대가 지킨다.",
        "…다른 사람 보내."
      ],
      explanation: "수군 해체 명령을 전하러 온 통사 앞에서 이순신(최민식)이 답하는 말. 울돌목 결전의 출발점입니다."
    },
    {
      id: "action-s3", genre: "action", type: "scene",
      film: "서울의 봄", year: 2023, director: "김성수", cast: "황정민·정우성·이성민",
      image: "assets/scenes/action-03.jpg",
      answer: "오늘 밤 서울은 끝까지 우리 부대가 지킨다.",
      options: [
        "오늘 밤 서울은 끝까지 우리 부대가 지킨다.",
        "실패하면 반역, 성공하면 혁명 아닙니까!",
        "이 사람들 빨리 내보내야 돼!",
        "나라가 위태로운 때 아닙니까."
      ],
      explanation: "수도경비사령관 이태신(정우성)의 각오. 반란군을 막겠다는 결심이 담긴 12·12의 밤입니다."
    },

    /* ───────────── 드라마·사극 : 명대사 ───────────── */
    {
      id: "drama-q1", genre: "drama", type: "quote",
      film: "올드보이", year: 2003, director: "박찬욱", cast: "최민식·유지태·강혜정",
      quote: "웃어라, 온 세상이 너와 함께 웃을 것이다. 울어라, 너 혼자 울 것이다.",
      options: ["올드보이", "친절한 금자씨", "박쥐", "장화, 홍련"],
      explanation: "오대수가 갇힌 감금방 벽의 그림 아래 적힌 문구. 19세기 시인 엘라 휠러 윌콕스의 시 '고독' 첫 구절로, 영화의 냉소를 상징합니다."
    },
    {
      id: "drama-q2", genre: "drama", type: "quote",
      film: "왕의 남자", year: 2005, director: "이준익", cast: "감우성·이준기·정진영",
      quote: "너 거기 있고 나 여기 있지? 아니지, 너 여기 있고 나 거기 있지?",
      options: ["왕의 남자", "광해, 왕이 된 남자", "사도", "관상"],
      explanation: "광대 공길(이준기)의 대사. 신분과 자리를 뒤집는 줄타기 같은 말장난이 이 영화의 정서를 대표합니다."
    },
    {
      id: "drama-q3", genre: "drama", type: "quote",
      film: "광해, 왕이 된 남자", year: 2012, director: "추창민", cast: "이병헌·류승룡·한효주",
      quote: "대체 이 나라가 누구 나라요?",
      options: ["광해, 왕이 된 남자", "명량", "남한산성", "왕의 남자"],
      explanation: "명에 바칠 것을 보고하는 신하들 앞에서 하선(이병헌)이 터뜨리는 말. 왕 노릇을 하던 광대가 진짜 왕의 목소리를 내는 장면입니다."
    },
    {
      id: "drama-q4", genre: "drama", type: "quote",
      film: "변호인", year: 2013, director: "양우석", cast: "송강호·오달수·곽도원",
      quote: "대한민국 주권은 국민에 있고, 모든 권력은 국민으로부터 나온다. 국가란 국민입니다.",
      options: ["변호인", "1987", "택시운전사", "남산의 부장들"],
      explanation: "송우석(송강호)의 최후 변론. 헌법 첫 문장을 끌어와 국가와 국민의 관계를 되묻는 장면입니다."
    },
    {
      id: "drama-q5", genre: "drama", type: "quote",
      film: "박하사탕", year: 1999, director: "이창동", cast: "설경구·문소리",
      quote: "나, 다시 돌아갈래!",
      options: ["박하사탕", "초록물고기", "시", "비트"],
      explanation: "김영호(설경구)가 달려오는 기차 앞에서 외치는 말. 시간을 거슬러 올라가는 영화의 구조를 한 문장으로 압축합니다."
    },
    {
      id: "drama-q6", genre: "drama", type: "quote",
      film: "비트", year: 1997, director: "김성수", cast: "정우성·고소영",
      quote: "나에겐 꿈이 없었다.",
      options: ["비트", "친구", "박하사탕", "말죽거리 잔혹사"],
      explanation: "민(정우성)의 나레이션. 90년대 청춘영화를 대표하는 첫 문장으로 남아 있습니다."
    },
    {
      id: "drama-q7", genre: "drama", type: "quote",
      film: "택시운전사", year: 2017, director: "장훈", cast: "송강호·유해진·류준열",
      quote: "아빠가… 손님을 두고 왔어.",
      options: ["택시운전사", "국제시장", "1987", "남한산성"],
      explanation: "광주를 떠나온 만섭(송강호)이 딸에게 하는 말. 아버지의 후회와 시대의 상처가 겹치는 장면입니다."
    },
    {
      id: "drama-q8", genre: "drama", type: "quote",
      film: "시", year: 2010, director: "이창동", cast: "윤정희·이대연",
      quote: "그곳은 어떤가요, 얼마나 적막하나요…",
      options: ["시", "밀양", "박하사탕", "초록물고기"],
      explanation: "미자(윤정희)가 쓴 시의 한 구절. 상실과 죄의식 앞에서 시를 쓰려는 노인의 목소리입니다."
    },
    {
      id: "drama-q9", genre: "drama", type: "quote",
      film: "초록물고기", year: 1997, director: "이창동", cast: "한석규·문성근·심혜진",
      quote: "큰성 그때 생각나?",
      options: ["초록물고기", "비트", "친구", "박하사탕"],
      explanation: "막동(한석규)이 형에게 반복해 묻는 말. 이창동 감독의 데뷔작에서 오래 남는 한 줄입니다."
    },
    {
      id: "drama-q10", genre: "drama", type: "quote",
      film: "장화, 홍련", year: 2003, director: "김지운", cast: "염정아·문근영·임수정",
      quote: "너… 진짜 무서운 게 뭔 줄 알아? 잊고 싶은데 도저히 잊지도 못하고, 지워지지도 않는 거 있지. 근데 그게 평생 붙어 다녀. 유령처럼.",
      options: ["장화, 홍련", "올드보이", "친절한 금자씨", "곡성"],
      explanation: "지워지지 않는 기억을 '유령'에 견준 대사. 새엄마와 두 자매의 집 안에서 벌어지는 공포의 정체를 설명합니다."
    },

    /* ───────────── 드라마·사극 : 명장면 ───────────── */
    {
      id: "drama-s1", genre: "drama", type: "scene",
      film: "왕의 남자", year: 2005, director: "이준익", cast: "감우성·이준기·정진영",
      image: "assets/scenes/drama-01.jpg",
      answer: "징한 놈의 이 세상. 한판 신나게 놀다가면 그뿐. 광대로 다시 만나 제대로 한번 맞춰보자!",
      options: [
        "징한 놈의 이 세상. 한판 신나게 놀다가면 그뿐. 광대로 다시 만나 제대로 한번 맞춰보자!",
        "너 거기 있고 나 여기 있지?",
        "그깟 사대의 명분이 뭐요?",
        "이 나라가 누구 나라요?"
      ],
      explanation: "궁 안의 무대, 장생(감우성)이 공길에게 남기는 말. 놀이와 죽음이 맞닿은 광대의 삶을 대표하는 대사로, 영상자료원 명대사 100선에 꼽혔습니다."
    },
    {
      id: "drama-s2", genre: "drama", type: "scene",
      film: "광해, 왕이 된 남자", year: 2012, director: "추창민", cast: "이병헌·류승룡·한효주",
      image: "assets/scenes/drama-02.jpg",
      answer: "임금이라면, 백성들이 지아비라 부르는 왕이라면 내 그들을 살려야겠소.",
      options: [
        "임금이라면, 백성들이 지아비라 부르는 왕이라면 내 그들을 살려야겠소.",
        "그깟 사대의 명분이 뭐요?",
        "대체 이 나라가 누구 나라요?",
        "경의 뜻대로 하시오."
      ],
      explanation: "촛불이 흔들리는 편전, 하선(이병헌)이 신하들 앞에서 왕의 자리를 처음으로 자기 것으로 쓰는 장면입니다."
    },
    {
      id: "drama-s3", genre: "drama", type: "scene",
      film: "올드보이", year: 2003, director: "박찬욱", cast: "최민식·유지태·강혜정",
      image: "assets/scenes/drama-03.jpg",
      answer: "누구냐, 넌.",
      options: [
        "누구냐, 넌.",
        "웃어라, 온 세상이 너와 함께 웃을 것이다.",
        "나, 다시 돌아갈래!",
        "너 진짜 무서운 게 뭔 줄 알아?"
      ],
      explanation: "15년 만에 세상으로 나온 오대수(최민식)가 감금된 방을 떠올리며 내뱉는 말. 영화의 첫 문장이자 가장 유명한 한 줄입니다."
    }
  ]
};
