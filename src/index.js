
const revealButton = document.getElementById('question-1');
const itemForm = document.getElementById('add-item');
const javaScriptQuestion = document.getElementById('javascript-question');

revealButton.addEventListener('click', function() {
  const answer = document.getElementById('answer');
  answer.classList.remove('hidden');
  revealButton.remove();
});


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

javaScriptQuestion.addEventListener('submit', function(event) {
  event.preventDefault()

  const answer = javaScriptQuestion.elements.answer.value;
  let response = '';

  if(answer !== 'false') {
    response = 'Incorrect!';
  }
  else {
    response = 'Correct!';
  }

  const responseMessage = document.getElementById('response');
  responseMessage.textContent = response;
  
  javaScriptQuestion.remove();
});
