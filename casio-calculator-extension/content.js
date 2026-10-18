(() => {
  if (window.__casioCalculatorLoaded) return;
  window.__casioCalculatorLoaded = true;
  let frame;
  const toggle = () => {
    if (!frame) {
      frame = document.createElement('iframe');
      frame.title = '卡西歐工程計算機';
      frame.src = chrome.runtime.getURL('index.html');
      Object.assign(frame.style, {
        position: 'fixed', right: '18px', bottom: '18px', width: '340px', height: '610px',
        border: '0', borderRadius: '16px', zIndex: '2147483647', background: 'transparent',
        boxShadow: '0 18px 48px rgba(0,0,0,.38)', display: 'block'
      });
      document.documentElement.appendChild(frame);
    } else {
      frame.style.display = frame.style.display === 'none' ? 'block' : 'none';
    }
  };
  chrome.runtime.onMessage.addListener(message => { if (message.type === 'toggle-calculator') toggle(); });
})();
