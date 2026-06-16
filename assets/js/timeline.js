
const cardsRoot = document.querySelector('[data-timeline-list]');
const searchInput = document.querySelector('[data-timeline-search]');
const filterRoot = document.querySelector('[data-filter-row]');
const countEl = document.querySelector('[data-count]');
const entries = window.CAREER_TIMELINE || [];
let activeFilter = 'All';

const filters = ['All', ...Array.from(new Set(entries.flatMap(e => e.type))).sort()];

function makeCard(entry) {
  const article = document.createElement('article');
  article.className = 'timeline-card';
  article.dataset.search = [entry.period, entry.role, entry.org, entry.location, entry.summary, entry.type.join(' '), entry.bullets.join(' '), entry.caseStudy?.title || ''].join(' ').toLowerCase();
  article.dataset.types = entry.type.join('|');
  const caseStudyAction = entry.caseStudy
    ? `<div class="timeline-actions"><a class="btn btn-primary btn-small" href="${entry.caseStudy.href}">${entry.caseStudy.label || 'Open case study'}</a></div>`
    : '';
  article.innerHTML = `
    <div class="timeline-card-top">
      <div>
        <div class="timeline-date">${entry.period}</div>
        <h2>${entry.role}</h2>
        <p class="timeline-org">${entry.org} · ${entry.location}</p>
      </div>
    </div>
    <p>${entry.summary}</p>
    <ul>${entry.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    <div class="tag-row">${entry.type.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div class="evidence-box"><strong>Archive note:</strong> ${entry.evidence}</div>
    ${caseStudyAction}
  `;
  return article;
}

function renderFilters() {
  filterRoot.innerHTML = filters.map(f => `<button class="filter-chip${f === activeFilter ? ' is-active' : ''}" type="button" data-filter="${f}">${f}</button>`).join('');
}

function renderCards() {
  cardsRoot.innerHTML = '';
  entries.forEach(e => cardsRoot.appendChild(makeCard(e)));
  applyFilters();
}

function applyFilters() {
  const q = (searchInput.value || '').trim().toLowerCase();
  let count = 0;
  document.querySelectorAll('.timeline-card').forEach(card => {
    const matchesText = !q || card.dataset.search.includes(q);
    const matchesFilter = activeFilter === 'All' || card.dataset.types.split('|').includes(activeFilter);
    const show = matchesText && matchesFilter;
    card.hidden = !show;
    if (show) count++;
  });
  countEl.textContent = String(count);
}

filterRoot.addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  activeFilter = button.dataset.filter;
  renderFilters();
  applyFilters();
});
searchInput.addEventListener('input', applyFilters);

renderFilters();
renderCards();
