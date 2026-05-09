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

let current = 0;

/* =========================
   ▼ 曲データ
========================= */

const resultData = {

  hype:{
    title:"ライブでぶち上がりたい",
    desc:"全てのストレスを吹き飛ばしてテンション爆上げしたいときに。에바뛰が止まらない曲たち。",
    songs:[
      {
        title:"99%",
        youtube:"#",
        live:"#"
      },
      {
        title:"killer joy",
        youtube:"#"
      },
      {
        title:"ヘカリゲ",
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
    title:"背中を押してほしい",
    desc:"一生懸命頑張る自分に、明日への元気をくれる曲たち。",
    songs:[
      {
        title:"still a flower",
        youtube:"#"
      },
      {
        title:"young forever",
        youtube:"#"
      },
      {
        title:"カーテンコール",
        youtube:"#"
      },
      {
        title:"人生賛歌",
        youtube:"#"
      }
    ]
  },

  emo:{
    title:"エモいCNBLUEに浸りたい",
    desc:"ゆったり1人の時間を過ごしたいときに。世界観に没頭できる曲たち。",
    songs:[
      {
        title:"tonight",
        youtube:"#"
      },
      {
        title:"stay sober",
        youtube:"#"
      },
      {
        title:"Moon",
        youtube:"#"
      },
      {
        title:"y, why",
        youtube:"#"
      }
    ]
  },

  band:{
    title:"バンドサウンドを楽しみたい",
    desc:"歌詞もいいけどサウンド重視派のあなたへ。多彩なカラーを持つバンドの魅力を感じられる曲たち。",
    songs:[
      {
        title:"have a good night",
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
    title:"優しいCNBLUEに包まれたい",
    desc:"ほっと一息つきたいときに。忙しい1日に癒しを与えてくれる曲たち。",
    songs:[
      {
        title:"hold my hand",
        youtube:"#"
      },
      {
        title:"stay with me",
        youtube:"#"
      },
      {
        title:"BLUE stars",
        youtube:"#"
      },
      {
        title:"manito",
        youtube:"#"
      }
    ]
  },

  happy:{
    title:"多幸感CNBLUEを浴びたい",
    desc:"楽しさも可愛さも120点！HAPPYオーラ満載の曲たち。",
    songs:[
      {
        title:"face to face",
        youtube:"#"
      },
      {
        title:"you're so fine",
        youtube:"#"
      },
      {
        title:"how you feel",
        youtube:"#"
      },
      {
        title:"glory days",
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
    .songs.slice(0,3);

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
        resultData[cat].songs[0]
      );

    });

  }

  resultTitle.innerHTML =
  topCategories.map(
    cat => resultData[cat].title
  ).join(" × ");

  resultText.innerHTML =
  topCategories.map(
    cat => resultData[cat].desc
  ).join("<br><br>");

  songList.innerHTML = "";

  displaySongs.forEach(song => {

    const card =
    document.createElement("div");

    card.classList.add("song-card");

    card.innerHTML = `
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
    `;

    songList.appendChild(card);

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

  const text =
`${resultTitle.innerText}タイプでした◎

#CNBLUE曲診断`;

  const url =
"https://mii622.github.io/CNBLUE_LIVENOTE/diagnosis/";

  window.open(
`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
  );

});

/* 初期表示 */

updateQuiz();
