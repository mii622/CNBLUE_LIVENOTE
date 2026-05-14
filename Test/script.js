const wrapper =
document.getElementById("questionWrapper");

const questions =
document.querySelectorAll(".question");

const nextBtn =
document.getElementById("nextBtn");

const prevBtn =
document.getElementById("prevBtn");

const progressBar =
document.getElementById("progressBar");

const resultContainer =
document.getElementById("resultContainer");

const resultTitle =
document.getElementById("resultTitle");

const resultBlocks =
document.getElementById("resultBlocks");

let current = 0;

/* =========================
   ▼ 曲データ
========================= */

const resultData = {
ja:{
  hype:{
    title:"ライブでぶち上がりたい💥",
    desc:"全てのストレスを吹き飛ばしてテンション爆上げしたいときに。에바뛰が止まらない曲たち。"
  }
},
     ko:{

  hype:{
    title:"라이브에서 제대로 신나고 싶어💥",
    desc:"모든 스트레스를 날려버리고 텐션을 최고로 끌어올리고 싶을 때 추천하는 곡들. 에바뛰가 멈추지 않아!"
  }
  },
    songs:[
      {
        title:"99%",
        youtubeKr:"https://youtu.be/502xHLfOlvc?si=IqxUk9DLAPocWSiM",
        live:"https://youtu.be/vPO0HUg3j10?si=Wp3XvH-hcx4_IH_v"
      },
      {
        title:"Killer Joy",
        youtubeKr:"https://youtu.be/ND5FhEsjVUk?si=c_rBGTu8n-RJpKBe",
        live:"https://youtu.be/1BHDvZChW7Q?si=vMc20CdpJMW3-HNl"
      },
      {
        title:"헷갈리게",
        youtubeKr:"https://youtu.be/XqNMTRDS_Gs?si=W5_qzOQ8L-cUb6Nv",
        live:"https://youtu.be/Zg_8X38eN90?si=3JRhvLBsY_5ZC6CG"
      },
      {
        title:"I\'m sorry",
        youtubeKr:"https://youtu.be/4p3cKsDCA0Y?si=VsjuJ5hTPKEC9590",
        live:"https://youtu.be/GQvBYzv-tJc?si=zzi6UM6elFJeU309"
      },
    ]
  },
ja:{
  support:{
    title:"背中を押してほしい📣",
    desc:"一生懸命頑張る自分に、明日への元気をくれる曲たち。"
  }
},
     ko:{

  support:{
    title:"등을 밀어주는 응원이 필요해📣",
    desc:"열심히 살아가는 나에게 내일을 향한 힘을 주는 곡들."
  }
     },
    songs:[
      {
        title:"그러나 꽃이었다(Still, a Flower)",
        youtubeKr:"https://youtu.be/YgwGBgZEKaM?si=s_gt5eLYdUl-_Cyp",
        live:"https://youtu.be/8Hfmayrn_9E?si=g4jII0DWy3eFW9rZ"
      },
      {
        title:"YOUNG FOREVER",
        youtubeKr:"https://youtu.be/hfoQ66kGbpE?si=8-T_vXQlWad33Rnf",
        live:"https://youtu.be/mll-0-yTwos?t=629&si=KIKnR3Tu1kduZ4M8"
      },
      {
        title:"Curtain call",
        youtubeJp:"https://youtu.be/0tbkfHVeLlQ?si=qthf693K7g-1y8x2"
      },
      {
        title:"人生賛歌",
        youtubeJp:"https://youtu.be/DrUCal6ZANM?si=49vQYkqce9wEAMYY",
        youtubeKr:"https://youtu.be/zjG2-lnKrhY?si=lsY2L2jUniG0EZBZ",
        live:"https://youtu.be/H4tXezKs_lY?si=RGjAv4Bo2z2TvcBR"
      }
    ]
  },
ja:{
  emo:{
    title:"エモいCNBLUEに浸りたい🥂",
    desc:"ゆったり1人の時間を過ごしたいときに。世界観に没頭できる曲たち。",
  }
},
ko:{
emo:{
    title:"감성적인 CNBLUE에 빠지고 싶어🥂",
    desc:"혼자만의 시간을 천천히 보내고 싶을 때. 곡의 세계관에 푹 빠질 수 있는 노래들."
  }
},
    songs:[,
      {
        title:"Tonight",
        youtubeKr:"https://youtu.be/Kta0RThzNj4?si=QcqWgQgJNMguC6fj"
      },
      {
        title:"STAY SOBER",
        youtubeKr:"https://youtu.be/q6MYigq7myE?si=81er9wGyDB1yfckF"
      },
      {
        title:"Y,Why",
        youtubeKr:"https://youtu.be/HfQRHylwn0M?si=oHKqnT3DJQbSGwZr"
      },
      {
        title:"Moon",
        youtubeJp:"https://youtu.be/pOoUZyrz0KQ?si=Q2rEhkJFy_E4rM7G"
      }
    ]
  },
ja:{
  band:{
    title:"バンドサウンドを楽しみたい🎸",
    desc:"歌詞もいいけどサウンド重視派のあなたへ。多彩なカラーを持つバンドの魅力を感じられる曲たち。"
  }
},
ko:{
band:{
    title:"밴드 사운드를 제대로 즐기고 싶어🎸",
    desc:"가사도 좋지만 사운드를 더 중요하게 생각하는 당신에게. 다양한 컬러를 가진 밴드 CNBLUE의 매력을 느낄 수 있는 곡들."
  }
},
    songs:[
      {
        title:"Coffee Shop",
        youtubeJp:"https://youtu.be/TFZyTFWmXJE?si=EDJTQC1xz5AWIDFE",
        live:"https://youtu.be/6IZPr_OzdsY?si=F2sFLpZaM2pmtJZP"
      },
      {
        title:"Synchronize",
        youtubeJp:"https://youtu.be/tntacaAYkXg?si=B5zhkIuxYG8UUb3U"
      },
      {
        title:"心盗夜",
        youtubeJp:"https://youtu.be/eZp0QP2xBi4?si=7WtA3jsfRTSSX58D"
      },
      {
        title:"Magic",
        youtubeJp:"https://youtu.be/6Foql79_2zM?si=JQ-oaJKXwNHXYSNg"
      }
    ]
  },
ja:{
  soft:{
    title:"優しいCNBLUEに包まれたい🩵",
    desc:"ほっと一息つきたいときに。忙しい1日に癒しを与えてくれる曲たち。"
  }
},
ko:{
   soft:{
    title:"따뜻한 CNBLUE에 감싸이고 싶어🩵",
    desc:"잠시 쉬어가고 싶을 때. 바쁜 하루에 편안한 힐링을 주는 곡들."
  }
},
    songs:[
      {
        title:"Hold My Hand",
        youtubeJp:"https://youtu.be/-4NsuIEJ-WI?si=rfXkHNiZGo3PYD6A",
        youtubeKr:"https://youtu.be/nOq862vXy8E?si=aMy5AnO_tfrUdByh"
      },
      {
        title:"Stay with Me",
        youtubeJp:"https://youtu.be/dI8xRdALfc8?si=DUXdZ8GqbSIamE20"
      },
      {
        title:"Blue Stars",
        youtubeKr:"https://youtu.be/Aky-cFcQFIg?si=Ma2EZsxDcSyDSgOY"
      },
      {
        title:"Hold Me Back",
        youtubeKr:"https://youtu.be/sv8a197kd8Q?si=o4qUIdsh7hx0Nnf8"
      }
    ]
  },
ja:{
  happy:{
    title:"多幸感CNBLUEを浴びたい🍀",
    desc:"楽しさも可愛さも120点！HAPPYオーラ満載の曲たち。"
  }
},
ko:{
   happy:{
    title:"행복 가득한 CNBLUE를 느끼고 싶어🍀",
    desc:"즐거움도 귀여움도 120점! HAPPY 오라가 가득한 곡들."
   }
},
    songs:[
      {
        title:"사소한 것들이 좋아서(Little Things)",
        youtubeKr:"https://youtu.be/Ikk9dhBS7T0?si=17SESVjrA7f-eOz1"
      },
      {
        title:"이렇게 예뻤나(YOU'RE SO FINE)",
        youtubeKr:"https://youtu.be/wAZJ_9D6lM4?si=sorahBMfT_0HvdYk",
        live:"https://youtu.be/xMqvm-Gl1JA?si=X9OK-NLEOFCwSN_J"
      },
      {
        title:"Glory Days",
        youtubeJp:"https://youtu.be/0ASitqUBpWQ?si=kmVq5XzsxKM20vr8",
        live:"https://youtu.be/XnCEW9Pyt28?t=809&si=hWoc9vhNxhhp9pyx"
      },
      {
        title:"How you feel",
        youtubeJp:"https://youtu.be/bwPrwc9L8G0?si=wkbTuqJ4Exg7TxDN"
      }
    ]
  }

};

/* =========================
   ▼ 表示更新
========================= */

function updateQuiz(){

  wrapper.style.transform =
  `translateX(-${current * 100}%)`;

  progressBar.style.width =
  `${((current + 1) / questions.length) * 100}%`;

  prevBtn.style.visibility =
  current === 0
  ? "hidden"
  : "visible";

  nextBtn.textContent =
current === questions.length - 1
? textData[currentLang].resultBtn
: textData[currentLang].next;

}

/* =========================
   ▼ 回答確認
========================= */

function isAnswered(){

  const checked =
  questions[current].querySelector(
    "input[type='radio']:checked"
  );

  return checked;

}

/* =========================
   ▼ 結果計算
========================= */

function calculateResult(){

  const scores = {
    hype:0,
    support:0,
    emo:0,
    band:0,
    soft:0,
    happy:0
  };

  document
  .querySelectorAll(
    "input[type='radio']:checked"
  )
  .forEach(input => {

    const type =
    input.value;

    const point =
    Number(input.dataset.point);

    scores[type] += point;

  });

  const maxScore =
  Math.max(...Object.values(scores));

  const topCategories =
  Object.keys(scores).filter(
    key => scores[key] === maxScore
  );

  showResult(topCategories);

}

/* =========================
   ▼ 結果表示
========================= */

function showResult(topCategories){

  document.querySelector(".quiz-container")
  .style.display = "none";

  resultContainer.style.display =
  "block";

  resultTitle.innerHTML =
  topCategories.map(
    cat => resultData[currentLang][cat].title
  ).join(" × ");

  resultBlocks.innerHTML = "";

topCategories.forEach(cat => {

  const block =
  document.createElement("div");

  block.classList.add("result-block");

   const songs =
resultData[currentLang][cat].songs;

let songCount = 4;

if(topCategories.length === 2){
  songCount = 3;
}

if(topCategories.length === 3){
  songCount = 2;
}

if(topCategories.length >= 4){
  songCount = 1;
}

const displaySongs =
songs.slice(0,songCount);


  block.innerHTML = `

    <div class="result-section">

      <p class="result-text">
        ${resultData[currentLang][cat].desc}
      </p>

      <div class="song-list">

        ${displaySongs.map(song => `

          <div class="song-card">

            <h3>${song.title}</h3>

            <div class="song-links">

  ${song.youtubeJp ? `
  <a href="${song.youtubeJp}" target="_blank">

    ▶ YouTubeで聴く
    ${song.youtubeKr ? "（日本語ver）" : ""}

  </a>
  ` : ""}

  ${song.youtubeKr ? `
  <a href="${song.youtubeKr}" target="_blank">

    ▶ YouTubeで聴く
    ${song.youtubeJp ? "（韓国語ver）" : ""}

  </a>
  ` : ""}

  ${song.live ? `
  <a href="${song.live}" target="_blank">

    🎤 LIVE映像を見る

  </a>
  ` : ""}

</div>

          </div>

        `).join("")}

      </div>

    </div>

  `;

  resultBlocks.appendChild(block);

});

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}

/* =========================
   ▼ ボタン処理
========================= */

nextBtn.addEventListener("click", () => {

  if(!isAnswered()){

    alert("選択肢を選んでください◎");
    return;

  }

  if(current < questions.length - 1){

    current++;
    updateQuiz();

  }

  else{

    calculateResult();

  }

});

prevBtn.addEventListener("click", () => {

  if(current > 0){

    current--;
    updateQuiz();

  }

});

/* =========================
   ▼ シェア
========================= */

document.getElementById("shareBtn")
.addEventListener("click", () => {

  const result = resultTitle.innerText;

  let text = "";

  if(currentLang === "ko"){

    text =
`나의 결과는 ${result} 타입!

지금 기분에 딱 맞는 CNBLUE를 찾아보세요🎧
https://mii622.github.io/CNBLUE_LIVENOTE/diagnosis/?v

#CNBLUE #CNBLUE추천곡진단`;

  }

  else{

    text =
`わたしは${result}タイプでした！

今の気分にぴったりのCNBLUEを見つける🎧
https://mii622.github.io/CNBLUE_LIVENOTE/diagnosis/?v

#CNBLUE #CNBLUE曲診断`;

  }

  window.open(
`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
  );

});

/* 初期表示 */

updateQuiz();
document
.getElementById("restartBtn")
.addEventListener("click", () => {

  location.reload();

});
/* =========================
   ▼ 言語データ
========================= */

let currentLang = "ja";

const textData = {

  ja:{

    mainTitle:"CNBLUEおすすめ曲診断",

    subtitle:`今の気分にぴったりな
CNBLUEを見つけよう`,

    resultSub:"診断結果",

    share:"診断結果をシェア",

    prev:"← 戻る",

    next:"次へ →",

    resultBtn:"結果を見る →",

    alert:"選択肢を選んでください◎",

    q1:"ライブで一番浴びたいのは？",
    q1c1:"パワフルなエネルギー",
    q1c2:"圧倒的な演奏力",
    q1c3:"世界観に浸れる空気感",
    q1c4:"優しく包み込むような温かさ",
    q1c5:"前向きになれる明るさ",
    q1c6:"わちゃわちゃした多幸感",

    q2:"どんなときに音楽を聴きたい？",
    q2c1:"気分を上げたいとき",
    q2c2:"ゆっくりリラックスしたいとき",
    q2c3:"集中したいとき",
    q2c4:"自分を励ましたいとき",
    q2c5:"リズムやサウンドそのものを楽しみたいとき",

    q3:"曲を聴くときに一番何を楽しむ？",
    q3c1:"歌詞",
    q3c2:"メロディ",
    q3c3:"ベースやドラムなど楽器のサウンド",
    q3c4:"ライブ感、ノリ",
    q3c5:"世界観",
    q3c6:"歌声のあたたかさ",

    q4:"今の気分に一番近いのは？",
    q4c1:"テンション上げたい",
    q4c2:"静かに浸りたい",
    q4c3:"誰かに応援してほしい",
    q4c4:"幸せいっぱいになりたい",
    q4c5:"穏やかに過ごしたい",
    q4c6:"ライブ感を味わいたい",

    q5:"CNBLUEの魅力、何が一番気になる？",
    q5c1:"幅広いサウンド",
    q5c2:"深い表現力",
    q5c3:"疾走感溢れる演奏",
    q5c4:"寄り添ってくれる歌詞",
    q5c5:"甘い歌声",
    q5c6:"3人のわちゃわちゃした雰囲気"

  },

  ko:{

    mainTitle:"CNBLUE 추천곡 진단",

    subtitle:`지금 기분에 딱 맞는
CNBLUE를 찾아보세요`,

    resultSub:"진단 결과",

    share:"진단 결과 공유하기",

    prev:"← 이전",

    next:"다음 →",

    resultBtn:"결과 보기 →",

    alert:"선택지를 골라주세요◎",

    q1:"라이브에서 가장 느끼고 싶은 건?",
    q1c1:"강렬한 에너지",
    q1c2:"압도적인 연주력",
    q1c3:"세계관에 빠져드는 분위기",
    q1c4:"부드럽게 감싸주는 따뜻함",
    q1c5:"긍정적인 기운",
    q1c6:"복작복작 행복한 분위기",

    q2:"언제 음악을 듣고 싶어?",
    q2c1:"기분을 끌어올리고 싶을 때",
    q2c2:"천천히 릴랙스하고 싶을 때",
    q2c3:"집중하고 싶을 때",
    q2c4:"스스로를 응원하고 싶을 때",
    q2c5:"리듬과 사운드 자체를 즐기고 싶을 때",

    q3:"노래를 들을 때 가장 중요하게 느끼는 건?",
    q3c1:"가사",
    q3c2:"멜로디",
    q3c3:"베이스나 드럼 같은 악기 사운드",
    q3c4:"라이브감, 흥",
    q3c5:"세계관",
    q3c6:"따뜻한 목소리",

    q4:"지금 기분과 가장 가까운 건?",
    q4c1:"텐션을 올리고 싶어",
    q4c2:"조용히 감성에 잠기고 싶어",
    q4c3:"누군가의 응원이 필요해",
    q4c4:"행복으로 가득 차고 싶어",
    q4c5:"편안하게 보내고 싶어",
    q4c6:"라이브 분위기를 느끼고 싶어",

    q5:"CNBLUE의 어떤 매력이 가장 궁금해?",
    q5c1:"다양한 사운드",
    q5c2:"깊은 표현력",
    q5c3:"질주감 넘치는 연주",
    q5c4:"위로가 되는 가사",
    q5c5:"달콤한 목소리",
    q5c6:"세 사람의 복작복작한 케미"

  }

};

/* =========================
   ▼ 言語切り替え
========================= */

/* =========================
   ▼ 言語切り替え
========================= */

function setLanguage(lang){

  currentLang = lang;

  document.getElementById("mainTitle").innerHTML =
  textData[lang].mainTitle;

  document.getElementById("siteSubtitle").innerHTML =
  textData[lang].subtitle;

  document.getElementById("resultSub").innerHTML =
  textData[lang].resultSub;

  document.getElementById("shareText").innerHTML =
  textData[lang].share;

  document.getElementById("prevBtn").innerHTML =
  textData[lang].prev;

  document.getElementById("nextBtn").innerHTML =
  current === questions.length - 1
  ? textData[lang].resultBtn
  : textData[lang].next;

  /* タイトル */

  for(let i=1;i<=5;i++){

    document.getElementById(`q${i}Title`).innerHTML =
    textData[lang][`q${i}`];

  }

  /* 選択肢 */

  for(let q=1;q<=5;q++){

    for(let c=1;c<=6;c++){

      const el =
      document.getElementById(`q${q}c${c}`);

      if(el && textData[lang][`q${q}c${c}`]){

        el.innerHTML =
        textData[lang][`q${q}c${c}`];

      }

    }

  }

  /* フォント切り替え */

  if(lang === "ko"){

    document.body.style.fontFamily =
    "'Noto Sans KR', sans-serif";

  }

  else{

    document.body.style.fontFamily =
    "'Noto Sans JP', sans-serif";

  }

  /* restartボタン */

  document.getElementById("restartBtn").innerHTML =
  lang === "ja"
  ? "↻ 診断トップに戻る"
  : "↻ 처음으로 돌아가기";

}
setLanguage("ja");
updateQuiz();
