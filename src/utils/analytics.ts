export function initBaiduAnalytics() {
  if (typeof window === 'undefined') return;

  window._hmt = window._hmt || [];
  const script = document.createElement('script');
  script.src = 'https://hm.baidu.com/hm.js?7341496e35c6c6215886d23652297ad5';
  script.async = true;
  document.head.appendChild(script);
}