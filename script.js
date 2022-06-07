const mario = document.querySelector('.mario')
const pipe  = document.querySelector('.pipe')
const clouds  = document.querySelectorAll('.clouds')

// or const mario = document.querySelector('#mario')

const jump = () => {
    
    mario.classList.add('jump_class')

    setTimeout( ()=>{
        mario.classList.remove('jump_class')
    }, 500 );
    
}

const loop = setInterval(() => {

    console.log("loop");
    
    const pipePosition  = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    // console.log(pipePosition);
    // console.log(marioPosition);

    if (pipePosition <= 82 && pipePosition > -10 && marioPosition <= 63){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.src = 'assets/game-over.png'
        mario.style.bottom = `${marioPosition}px`
        mario.style.width = '50px'
        mario.style.marginLeft = '35px'
        // stop  the clouds
        // clouds.forEach( (el) => {

        //     el.style.animation = 'none'
        //     el.style.left = `${}`
        
        // } )
        // clouds.style.animation = 'none'

        clearInterval(loop); // stop the loop after the game is over
    }
}, 10);

addEventListener('keydown', jump);
