
(function () {
  const textNorm = (value) => (value || '').replace(/\s+/g, ' ').trim();
  function byText(root, selector, regex) {
    return Array.from(root.querySelectorAll(selector)).find((el) => regex.test(textNorm(el.textContent)));
  }
  function nearestBlock(el) {
    let current = el;
    while (current && current.parentElement) {
      if (['DIV', 'ARTICLE', 'ASIDE', 'SECTION'].includes(current.tagName) && current.children.length > 1) {
        return current;
      }
      current = current.parentElement;
    }
    return el.parentElement;
  }
  function lowestCommonAncestor(a, b) {
    if (!a || !b) return null;
    const seen = new Set();
    let current = a;
    while (current) { seen.add(current); current = current.parentElement; }
    current = b;
    while (current) { if (seen.has(current)) return current; current = current.parentElement; }
    return null;
  }
  function findLikelyCardGrid(section) {
    const candidates = Array.from(section.querySelectorAll('div, section, article'));
    return candidates.find((el) => {
      const directChildren = Array.from(el.children || []);
      if (directChildren.length < 3) return false;
      const cardish = directChildren.filter((child) => {
        const cls = (child.className || '').toString();
        return /card|panel|tile/i.test(cls) || ['ARTICLE', 'DIV'].includes(child.tagName);
      });
      return cardish.length >= 3;
    }) || null;
  }
  function tuneToolbox() {
    const title = byText(document, 'h1,h2,h3', /Fr33\s*3l33T/i);
    if (!title) return;
    title.textContent = 'Fr33 3l33T t00lz.';
    title.classList.add('vpv-toolbox-title');
    const card = nearestBlock(title);
    if (card) card.classList.add('vpv-toolbox-card');
  }
  function tuneAbout() {
    const section = document.getElementById('about');
    if (!section) return;
    const title = byText(section, 'h1,h2,h3', /Technical enough/i);
    const copyLead = byText(section, 'p', /I work across infrastructure/i);
    if (!title || !copyLead) return;
    title.classList.add('vpv-about-title');
    const left = nearestBlock(title);
    const right = nearestBlock(copyLead);
    if (left) left.classList.add('vpv-about-panel');
    if (right) right.classList.add('vpv-about-copy');
    const grid = lowestCommonAncestor(left, right);
    if (grid) grid.classList.add('vpv-about-grid');
  }
  function tuneFocus() {
    const section = document.getElementById('focus');
    if (!section) return;
    const title = byText(section, 'h1,h2,h3', /Where I do damage control/i);
    if (title) title.classList.add('vpv-focus-title');
    const grid = findLikelyCardGrid(section);
    if (grid) grid.classList.add('vpv-focus-card-grid');
  }
  function tuneStarpet() {
    const title = byText(document, 'h1,h2,h3', /Symptoms became evidence\./i);
    if (!title) return;
    title.classList.add('vpv-starpet-wide-title');
  }
  function init() { tuneToolbox(); tuneAbout(); tuneFocus(); tuneStarpet(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else { init(); }
})();
