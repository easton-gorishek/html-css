const revealButton = document.getElementById('question-1');

const answer = document.getElementById('answer');

revealButton.addEventListener('click', function() {
  answer.classList.remove('hidden');
  revealButton.disabled = true;
});

const itemForm = document.getElementById('add-item');

itemForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const item = itemForm.elements.userInput;

  const liElement = document.createElement('li');
  liElement.textContent = item.value;

  const unorderedList = document.getElementById('unordered-list');
  unorderedList.appendChild(liElement);

  item.value = '';
  item.focus();
});
