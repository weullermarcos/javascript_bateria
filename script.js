
document.body.addEventListener('keyup', (event)=>{

    playSound(event.code.toLocaleLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () =>{

    let song = document.querySelector('#input').value;

    if(song !== ''){

        //gerando um array com cada item da minha string
        let songArray = song.split('');

        // console.log(songArray);

        //toca a composição
        playComposition(songArray);
    }

});

function playSound(sound){

    //verifica qual tecla foi recebida
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    //se achar o elemento, toca
    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    //se achar o elemento, ativa o efeito da div
    if(keyElement){

        //adicionando efeito de ativo
        keyElement.classList.add('active');

        //removendo efeito de ativo após 300 milisegundos
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }

}

function playComposition(songArray){

    //define intervalo entre as notas
    let wait = 0;

    for(let songItem of songArray){

        setTimeout(()=>{

            // chama a função para tocar
            playSound(`key${songItem}`);

        }, wait);

        //incrementando o tempo de timeout
        wait += 250;
    }
}

