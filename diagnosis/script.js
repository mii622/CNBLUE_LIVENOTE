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
        youtube:"#",
        live:"#"
      },
      {
        title:"Killer Joy",
        youtube:"#"
      },
      {
        title:"헷갈리게",
        youtube:"#"
      },
      {
        title:"I'm sorry",
        youtube:"#"
      },
      {
        title:"Magic",
        youtube:"#"
      }
    ]
  },

  support:{
    title:"背中を押してほしい📣",
    desc:"一生懸命頑張る自分に、明日への元気をくれる曲たち。",
    songs:[
      {
        title:"그러나 꼿이었다(Still, a Flower)",
        youtube:"#"
      },
      {
        title:"YOUNG FOREVER",
        youtube:"#"
      },
      {
        title:"Curtain call",
        youtube:"#"
      },
      {
        title:"人生賛歌",
        youtube:"#"
      }
    ]
  },

  emo:{
    title:"エモいCNBLUEに浸りたい🥂",
    desc:"ゆったり1人の時間を過ごしたいときに。世界観に没頭できる曲たち。",
    songs:[
      {
        title:"Tonight",
        youtube:"#"
      },
      {
        title:"STAY SOBER",
        youtube:"#"
      },
      {
        title:"Moon",
        youtube:"#"
      },
      {
        title:"Y,Why",
        youtube:"#"
      }
    ]
  },

  band:{
    title:"バンドサウンドを楽しみたい🎸",
    desc:"歌詞もいいけどサウンド重視派のあなたへ。多彩なカラーを持つバンドの魅力を感じられる曲たち。",
    songs:[
      {
        title:"Have a Good Night",
        youtube:"#"
      },
      {
        title:"Synchronize",
        youtube:"#"
      },
      {
        title:"心盗夜",
        youtube:"#"
      },
      {
        title:"holiday",
        youtube:"#"
      }
    ]
  },

  soft:{
    title:"優しいCNBLUEに包まれたい🩵",
    desc:"ほっと一息つきたいときに。忙しい1日に癒しを与えてくれる曲たち。",
    songs:[
      {
        title:"Hold My Hand",
        youtube:"#"
      },
      {
        title:"Stay with Me",
        youtube:"#"
      },
      {
        title:"Blue Stars",
        youtube:"#"
      },
      {
        title:"마니또(MANITO)",
        youtube:"#"
      }
    ]
  },

  happy:{
    title:"多幸感CNBLUEを浴びたい🍀",
    desc:"楽しさも可愛さも120点！HAPPYオーラ満載の曲たち。",
    songs:[
      {
        title:"Face to Face",
        youtube:"#"
      },
      {
        title:"이렇게 예뻤나(YOU'RE SO FINE)",
        youtube:"#"
      },
      {
        title:"How you feel",
        youtube:"#"
      },
      {
        title:"Glory Days",
        youtube:"#"
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

  let displaySongs = [];

  if(topCategories.length === 1){

    displaySongs =
    resultData[topCategories[0]]
    .songs.slice(0,4);

  }

  else if(topCategories.length === 2){

    topCategories.forEach(cat => {

      displaySongs.push(
        ...resultData[cat]
        .songs.slice(0,3)
      );

    });

  }

  else if(topCategories.length === 3){

    topCategories.forEach(cat => {

      displaySongs.push(
        ...resultData[cat]
        .songs.slice(0,2)
      );

    });

  }

  else{

    topCategories.forEach(cat => {

      displaySongs.push(
        ...resultData[cat].songs.slice(0,1)
      );

    });

  }

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

  let songCount = 3;

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

              <a href="${song.youtube}"
              target="_blank">

                ▶ YouTubeで聴く

              </a>

              ${song.live ?

              `<a href="${song.live}"
              target="_blank">

                🎤 LIVE映像を見る

              </a>`

              : ""}

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
