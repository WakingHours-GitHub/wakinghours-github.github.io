(() => {
  const viewport = document.querySelector('.news-scroll');
  const list = document.querySelector('.news-list');
  if (!viewport || !list) return;

  function fitFiveEntries() {
    const entries = list.children;
    if (!entries.length) return;
    const lastVisible = entries[Math.min(5, entries.length) - 1];
    const height = lastVisible.getBoundingClientRect().bottom - list.getBoundingClientRect().top;
    viewport.style.maxHeight = `${Math.ceil(height)}px`;
  }

  fitFiveEntries();
  window.addEventListener('resize', fitFiveEntries);
  if ('ResizeObserver' in window) {
    new ResizeObserver(fitFiveEntries).observe(list);
  }
  if (document.fonts) document.fonts.ready.then(fitFiveEntries);
})();
