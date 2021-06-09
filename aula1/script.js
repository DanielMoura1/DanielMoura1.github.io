var vidaing = 100
    
var vidavc = 80 
function carregar(){
    
    var vida =  window.document.getElementById("vida")

    var vidaing = 100
    
    var vidavc = 80 

    vida.innerHTML = `sua vida é  ${vidavc}   a vida do inimigo é ${vidaing} ` 
}

function verificar(){
    
    
    
    var vida =  window.document.getElementById("vida")

    var msg = window.document.getElementById("msg")
    
    
   
    
    var golpe = document.getElementsByName("atq")
    var img = window.document.getElementById("imagem")
    var imgs = window.document.getElementById("imagens")
    if(vidavc <=0 && vidaing <=0){
        msg.innerHTML = 'EMPATE'
    }else if(vidaing <=0){
        msg.innerHTML = 'VITORIA'
    }else if(vidavc <= 0){
        msg.innerHTML = 'DERROTA'

    } else if(golpe[0].checked){
        img.src = "chute.png"
        imgs.src = "cachorromorde.png"
        vidavc = vidavc - 8
        vidaing = vidaing - 10
        vida.innerHTML = `sua vida é  ${vidavc}   a vida do inimigo é ${vidaing} `
        msg.innerHTML = "Neemias deu um chute no dog, causou:[ 10 ]de dano O Cachorro mordeu a perna dele, Neemias recebeu: [ 8 ] de dano" 

    } else if(golpe[1].checked){
        img.src = "soco.png"
        imgs.src = "mordida.png"
        vidavc = vidavc - 15
        vidaing = vidaing - 15
        vida.innerHTML = `sua vida é  ${vidavc}   a vida do inimigo é ${vidaing} `
        msg.innerHTML = "Neemias da soco no dog, causou:[ 15 ]de dano Dog morde a mao dele, Neemias recebeu: [ 15 ] de dano"


        


    }else if(golpe[2].checked){
        img.src = "pedra.png"
        imgs.src = "eita.png"
        vidavc = vidavc - 30
        vidaing = vidaing - 20
        vida.innerHTML = `sua vida é  ${vidavc}   a vida do inimigo é ${vidaing} `
        msg.innerHTML = "Neemias joga uma pedra no dog, causou[ 20 ]de danodog fica com odio no coraçao e morde o saco do ney, ele recebeu: [ 30 ] de dano"
    }else if(golpe[3].checked){
        img.src = "correr.png"
        imgs.src = "dog.png"
        vidavc = vidavc + 20
        vidaing = vidaing + 15
        vida.innerHTML = `sua vida é  ${vidavc}   a vida do inimigo é ${vidaing} `
        msg.innerHTML = "Neemias corre ,  Neemias curou:[20]cachorro corre atras dele , recupera [15] de vida"
    }


    

    
   
   
   
}
