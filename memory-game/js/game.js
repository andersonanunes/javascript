const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

// array dos personagens
const characters = [
    'anderson',
    'cassiano',
    'ricardo',
    'renato',
    'marcao',
    'julinho',
    'beto',
    'mauro',
    'murilo',
]

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

// funcao que vai criar as cartas
const createCard = (character) => {

    // recebe os parametros de createElement
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    // manipula o css para carregar a imagem
    front.style.backgroundImage = `url('../images/character/${character}.jpg')`

    // montagem da estrutura igual no html
    card.appendChild(front);
    card.appendChild(back);

    // cria o evento para virar a carta
    card.addEventListener('click', revealCard);

    // add o atributo com o nome do personagem
    card.setAttribute('data-character', character)

    return card;

}

// funcao que finaliza o jogo
const checkEndGame = () => {

    const disableCards = document.querySelectorAll('.disableCard');
    console.log(disableCards);

    if (disableCards.length == 18) {
        clearInterval(this.loop);
        alert(`Parabéns ${spanPlayer.innerHTML}! Vc ainda não está gaga!`);
    }

}

// funcao que verifica se as cartas selecionadas sao iguais
const checkCards = () => {

    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondcard.getAttribute('data-character');
    
    if (firstCharacter == secondCharacter) {
        
        firstCard.firstChild.classList.add('disableCard');
        secondcard.firstChild.classList.add('disableCard');

        firstCard = '';
        secondcard = '';

        // se tiver acertado todas acaba o jogo
        checkEndGame();

    } else {
        
        setTimeout(() => {
            
            firstCard.classList.remove('reveal');
            secondcard.classList.remove('reveal');
            
            firstCard = '';
            secondcard = '';
    
        }, 500);

    }

}

let firstCard = '';
let secondcard = '';

// funcao que vira a carta
const revealCard = ({target}) => {

    // verifica se a carta já foi virada
    if (target.parentNode.className.includes('reveal')) {
        return
    }

    // verifica se foi a primeira carta clicada
    if (firstCard == '') {
        
        target.parentNode.classList.add('reveal');
        firstCard = target.parentNode;

    } else if (secondcard == '') {

        target.parentNode.classList.add('reveal');
        secondcard = target.parentNode;

        // chama a funcao que verifica se sao igual
        checkCards();
    
    }

}

// funcao para carregar o jogo
const loadGame = () => {

    // duplica o array
    const doubleCharacter = [ ...characters, ...characters ];

    // embaralha as cartas
    const shuffleCharacter = doubleCharacter.sort(() => Math.random() - 0.5);

    // percorre o array de cartas
    shuffleCharacter.forEach((character) => {

        // invoca o metodo que cria as cartas
        const card = createCard(character);
        grid.appendChild(card);

    });

}

// cria o timer
const startTimer = () => {

    this.loop = setInterval(() => {

        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;

    }, 1000)

}

window.onload = () => {
    
    // recupera o nome do user gravado no localstorage
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();

}


