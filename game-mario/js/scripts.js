const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(()=> {
        mario.classList.remove('jump');
    }, 500);
}

// verifica se o tubo atingiu o mario
const loop = setInterval(() => {
    
    // pega a posicao do pipe
    const pipePosition = pipe.offsetLeft;

    // pega a coordenada do mario de acordo com o momento do pulo
    // o sinal de + é usado para converter uma string em número
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // se bater no pipe game over
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop)
    }
}, 10);

document.addEventListener('keydown', jump);