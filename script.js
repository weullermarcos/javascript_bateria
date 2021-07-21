
document.body.addEventListener('keyup', (event)=>{

    playSound(event.code.toLocaleLowerCase());
});

function playSound(sound){

    //alert('chegou aqui');

    //verifica qual tecla foi recebida
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    //se achar o elemento, toca
    if(audioElement){
        audioElement.currenTime = 0;
        audioElement.play();
    }

    if(keyElement){

        //adicionando efeito de ativo
        keyElement.classList.add('active');

        //removendo efeito de ativo após 300 milisegundos
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }

}

