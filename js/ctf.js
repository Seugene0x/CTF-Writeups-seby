const searchBar = document.getElementById('searchBar');
const ctfGrid = document.getElementById('ctfGrid');
const platformFilters = document.querySelectorAll('.filter-btn[data-filter]');
const difficultyFilters = document.querySelectorAll('.filter-btn[data-difficulty]');

let currentPlatform = 'all';
let currentDifficulty = 'all';

platformFilters.forEach(btn => {
  btn.addEventListener('click', () => {
    platformFilters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentPlatform = btn.dataset.filter;
    filterCards();
  });
});

difficultyFilters.forEach(btn => {
  btn.addEventListener('click', () => {
    difficultyFilters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDifficulty = btn.dataset.difficulty;
    filterCards();
  });
});

searchBar.addEventListener('input', filterCards);

function filterCards() {
  const searchTerm = searchBar.value.toLowerCase();
  const cards = ctfGrid.querySelectorAll('.card');

  cards.forEach(card => {
    const platform = card.dataset.platform;
    const difficulty = card.dataset.difficulty;
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const description = card.querySelector('.card-description').textContent.toLowerCase();

    const matchesPlatform = currentPlatform === 'all' || platform === currentPlatform;
    const matchesDifficulty = currentDifficulty === 'all' || difficulty === currentDifficulty;
    const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);

    card.style.display = matchesPlatform && matchesDifficulty && matchesSearch ? 'block' : 'none';
  });
}
