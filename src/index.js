const revealButton = document.getElementById('question-1');

const answer = document.getElementById('answer');

revealButton.addEventListener('click', function() {
  answer.classList.remove('hidden');
  revealButton.disabled = true;
});
