const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  
  if (target.value.length > 2) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');

}

const handleSubmit = (event) => {
  
  // bloqueia o reload da pagina
  event.preventDefault();
  
  // salva o valor digitado no local storage
  localStorage.setItem('player', input.value);
  
  // redireciona para a home do jogo
  window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
