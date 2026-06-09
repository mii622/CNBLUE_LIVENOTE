function initGenerator(config){

  const wrapper = document.querySelector('.wrapper');

  // 画像差し替え
  const img = wrapper.querySelector('img');
  img.src = config.image;

  // カード生成
  config.cards.forEach(pos => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.left = pos.left;
    card.style.top = pos.top;

    card.dataset.state = "0";

    card.addEventListener('click', () => {
      let s = (Number(card.dataset.state) + 1) % 3;
      card.dataset.state = s;
      card.innerHTML = '';

      if(s === 1){
        const m = document.createElement('span');
        m.className = 'mark give';
        m.textContent = '譲';
        card.appendChild(m);
      }

      if(s === 2){
        const m = document.createElement('span');
        m.className = 'mark want';
        m.textContent = '求';
        card.appendChild(m);
      }
    });

    wrapper.appendChild(card);
  });

  // 保存
  document.querySelector('.saveBtn').addEventListener('click', async () => {
    const canvas = await html2canvas(wrapper, {
      scale: window.devicePixelRatio * 2,
      useCORS: true
    });

    const link = document.createElement('a');
    link.download = config.name + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}
