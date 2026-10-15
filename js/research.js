const searchBar = document.getElementById('searchBar');
const researchGrid = document.getElementById('researchGrid');
const severityFilters = document.querySelectorAll('.filter-btn[data-severity]');

let currentSeverity = 'all';

severityFilters.forEach(btn => {
  btn.addEventListener('click', () => {
    severityFilters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSeverity = btn.dataset.severity;
    filterCards();
  });
});

searchBar.addEventListener('input', filterCards);

function filterCards() {
  const searchTerm = searchBar.value.toLowerCase();
  const cards = researchGrid.querySelectorAll('.card');

  cards.forEach(card => {
    const severity = card.dataset.severity;
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const description = card.querySelector('.card-description').textContent.toLowerCase();

    const matchesSeverity = currentSeverity === 'all' || severity === currentSeverity;
    const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);

    card.style.display = matchesSeverity && matchesSearch ? 'block' : 'none';
  });
}

const initialFilter = [...severityFilters].find(btn => btn.dataset.severity === location.hash.slice(1));
if (initialFilter) initialFilter.click();
