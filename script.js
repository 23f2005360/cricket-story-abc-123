// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Toggle story paragraph visibility
  const toggleBtn = document.getElementById('toggle-story-btn');
  const storyParagraph = document.getElementById('story-paragraph');

  toggleBtn.addEventListener('click', function() {
    if (storyParagraph.style.display === 'none') {
      storyParagraph.style.display = 'block';
    } else {
      storyParagraph.style.display = 'none';
    }
  });

  // Add new player button behavior
  const addPlayerBtn = document.getElementById('add-player-btn');
  const newPlayerForm = document.getElementById('new-player-form');
  const submitPlayerBtn = document.getElementById('submit-player-btn');
  const newPlayerInput = document.getElementById('new-player-input');
  const playersList = document.getElementById('players-list');

  addPlayerBtn.addEventListener('click', function() {
    // Toggle display
    if (newPlayerForm.style.display === 'none') {
      newPlayerForm.style.display = 'block';
    } else {
      newPlayerForm.style.display = 'none';
    }
  });

  // Handle adding new player
  submitPlayerBtn.addEventListener('click', function() {
    const playerName = newPlayerInput.value.trim();
    if (playerName !== '') {
      const li = document.createElement('li');
      li.className = 'player-item';
      li.textContent = playerName;
      playersList.appendChild(li);
      newPlayerInput.value = '';
      newPlayerForm.style.display = 'none';
    } else {
      alert('Please enter a player name.');
    }
  });
});