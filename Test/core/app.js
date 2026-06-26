function init(config){

  const wrapper = document.querySelector('.wrapper');

  // 画像セット
  const img = wrapper.querySelector('img');
  img.src = config.image;

  // カード生成
  config.cards.forEach(pos => {

    const card = document.createElement('div');
    card.className = 'card ' + pos.type + '-card';

    
card.style.left = pos.left;
card.style.top = pos.top;
card.style.width = config.cardWidth || "8%";
card.style.height = config.cardHeight || "16%";

    card.dataset.state = "0";

    card.addEventListener('click', () => {

      let state = Number(card.dataset.state);
      state = (state + 1) % 3;
      card.dataset.state = state;

      card.innerHTML = '';

      if(state === 1){
        const m = document.createElement('span');
        m.className = 'mark give';
        m.textContent = '譲';
        card.appendChild(m);
      }

      if(state === 2){
        const m = document.createElement('span');
        m.className = 'mark want';
        m.textContent = '求';
        card.appendChild(m);
      }

    });

    wrapper.appendChild(card);
  });

  // 保存
  document.getElementById('saveBtn').addEventListener('click', async () => {

    const canvas = await html2canvas(wrapper, {
      scale: window.devicePixelRatio * 2,
      useCORS: true
    });

    const link = document.createElement('a');
    link.download = 'trc.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

}
