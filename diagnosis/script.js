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

const resultText =
document.getElementById("resultText");

const songList =
document.getElementById("songList");

const resultBlocks =
document.getElementById("resultBlocks");

let current = 0;

/* =========================
   ▼ 曲データ
========================= */

const resultData = {

  hype:{
    title:"ライブでぶち上がりたい💥",
    desc:"全てのストレスを吹き飛ばしてテンション爆上げしたいときに。에바뛰が止まらない曲たち。",
    songs:[
      {
        title:"99%",
        youtubeKr:"https://youtu.be/502xHLfOlvc?si=IqxUk9DLAPocWSiM",
        live:"https://youtu.be/vPO0HUg3j10?si=Wp3XvH-hcx4_IH_v"
      },
      {
        title:"Killer Joy",
        youtubeKr:"https://youtu.be/ND5FhEsjVUk?si=c_rBGTu8n-RJpKBe"
        live:"https://youtu.be/1BHDvZChW7Q?si=vMc20CdpJMW3-HNl"
      },
      {
        title:"헷갈리게",
        youtubeKr:"https://youtu.be/XqNMTRDS_Gs?si=W5_qzOQ8L-cUb6Nv"
        live:"https://youtu.be/Zg_8X38eN90?si=3JRhvLBsY_5ZC6CG"
      },
      {
        title:"I'm sorry",
        youtubeKr:"https://youtu.be/4p3cKsDCA0Y?si=VsjuJ5hTPKEC9590"
        live:"https://youtu.be/GQvBYzv-tJc?si=zzi6UM6elFJeU309"
      },
    ]
  },

  support:{
    title:"背中を押してほしい📣",
    desc:"一生懸命頑張る自分に、明日への元気をくれる曲たち。",
    songs:[
      {
        title:"그러나 꼿이었다(Still, a Flower)",
        youtubeKr:"https://youtu.be/YgwGBgZEKaM?si=s_gt5eLYdUl-_Cyp"
        live:"https://youtu.be/8Hfmayrn_9E?si=g4jII0DWy3eFW9rZ"
      },
      {
        title:"YOUNG FOREVER",
        youtubeKr:"https://youtu.be/hfoQ66kGbpE?si=8-T_vXQlWad33Rnf"
        live:"https://youtu.be/mll-0-yTwos?t=629&si=KIKnR3Tu1kduZ4M8"
      },
      {
        title:"Curtain call",
        youtubeJp:"https://youtu.be/0tbkfHVeLlQ?si=qthf693K7g-1y8x2"
      },
      {
        title:"人生賛歌",
        youtubeJp:"https://youtu.be/DrUCal6ZANM?si=49vQYkqce9wEAMYY"
        youtubeKr:"https://youtu.be/zjG2-lnKrhY?si=lsY2L2jUniG0EZBZ"
        live:"https://youtu.be/H4tXezKs_lY?si=RGjAv4Bo2z2TvcBR"
      }
    ]
  },

  emo:{
    title:"エモいCNBLUEに浸りたい🥂",
    desc:"ゆったり1人の時間を過ごしたいときに。世界観に没頭できる曲たち。",
    songs:[
      {
        title:"Tonight",
        youtubeKr:"https://youtu.be/Kta0RThzNj4?si=QcqWgQgJNMguC6fj"
      },
      {
        title:"STAY SOBER",
        youtubeKr:"https://youtu.be/q6MYigq7myE?si=81er9wGyDB1yfckF"
      },
      {
        title:"Moon",
        youtubeJp:"https://youtu.be/pOoUZyrz0KQ?si=Q2rEhkJFy_E4rM7G"
      },
      {
        title:"Y,Why",
        youtubeKr:"https://youtu.be/HfQRHylwn0M?si=oHKqnT3DJQbSGwZr"
      }
    ]
  },

  band:{
    title:"バンドサウンドを楽しみたい🎸",
    desc:"歌詞もいいけどサウンド重視派のあなたへ。多彩なカラーを持つバンドの魅力を感じられる曲たち。",
    songs:[
      {
        title:"Magic",
        youtubeJp:"https://youtu.be/6Foql79_2zM?si=JQ-oaJKXwNHXYSNg"
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
        title:"Coffee Shop",
        youtubeJp:"https://youtu.be/TFZyTFWmXJE?si=EDJTQC1xz5AWIDFE"
        live:"https://youtu.be/6IZPr_OzdsY?si=F2sFLpZaM2pmtJZP"
      }
    ]
  },

  soft:{
    title:"優しいCNBLUEに包まれたい🩵",
    desc:"ほっと一息つきたいときに。忙しい1日に癒しを与えてくれる曲たち。",
    songs:[
      {
        title:"Hold My Hand",
        youtubeJp:"https://youtu.be/-4NsuIEJ-WI?si=rfXkHNiZGo3PYD6A"
        youtubeKr:"https://youtu.be/Aky-cFcQFIg?si=Ma2EZsxDcSyDSgOY"
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

  happy:{
    title:"多幸感CNBLUEを浴びたい🍀",
    desc:"楽しさも可愛さも120点！HAPPYオーラ満載の曲たち。",
    songs:[
      {
        title:"사소한 것들이 좋아서(Little Things)",
        youtubeKr:"https://youtu.be/Ikk9dhBS7T0?si=17SESVjrA7f-eOz1"
      },
      {
        title:"이렇게 예뻤나(YOU'RE SO FINE)",
        youtubeKr:"https://youtu.be/wAZJ_9D6lM4?si=sorahBMfT_0HvdYk"
        live:"https://youtu.be/xMqvm-Gl1JA?si=X9OK-NLEOFCwSN_J"
      },
      {
        title:"How you feel",
        youtubeJp:"https://youtu.be/bwPrwc9L8G0?si=wkbTuqJ4Exg7TxDN"
      },
      {
        title:"Glory Days",
        youtubeJp:"https://youtu.be/0ASitqUBpWQ?si=kmVq5XzsxKM20vr8"
        live:"https://youtu.be/XnCEW9Pyt28?t=809&si=hWoc9vhNxhhp9pyx"
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
  ? "結果を見る →"
  : "次へ →";

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
    cat => resultData[cat].title
  ).join(" × ");

  resultBlocks.innerHTML = "";

topCategories.forEach(cat => {

  const block =
  document.createElement("div");

  block.classList.add("result-block");

   const songs =
resultData[cat].songs;

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
        ${resultData[cat].desc}
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

  const text =
`${result}タイプでした🩵

今の気分にぴったりのCNBLUEを見つける🔍
https://mii622.github.io/CNBLUE_LIVENOTE/diagnosis/

#CNBLUE #CNBLUE曲診断`;

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
