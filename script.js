var vidaing = 100
var mafia = 200
var vidavc = 80 
var vidasua = 150
var vidaad = 901
var mafia = 201
var ne = 200

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
    

    
    
    
    

    
    if(vidavc >0 && vidaing >0){
        if(golpe[0].checked){
            
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
    }else if(vidavc <=0 && vidaing <=0){
        if(ne ==200 && mafia == 201){
            msg.innerHTML = 'um homem chega e pergunta pq Neemias ta batendo no cachorro do maior mafioso do Brasil o homem coloca Neemias dentro de um carro e leva ele para covil o mafioso diz que se ney vencer ele em um luta de boxe ney pode sair livre de la'
            img.src = "chute.png.png"
            vida.innerHTML = ` vida mafia :[  200 ]   vida Neemias  :[ 200 ]`
            document.getElementById("label1").innerHTML = 'A';
            document.getElementById("label2").innerHTML = 'B';
            document.getElementById("label3").innerHTML = 'C';
            document.getElementById("label4").innerHTML = 'D';
            
            mafia = 200
        }else if(ne <= 0){
            msg.innerHTML = " DERROTA"
            img.src = "derrota.png"
            imgs.src = "vazio.png"

        
        }else if(mafia <=0){
            msg.innerHTML = " vitoria"
            img.src = "vit.png"
            imgs.src = "vazio.png"

        }
        else if (golpe[0].checked){
            if(mafia%10 ==0){
                mafia = mafia +50
            }
            msg.innerHTML = " Neemias, causou:[ 20 ]de dano mafioso causa[ 20 ]"
            mafia = mafia - 20
            ne = ne - 20
            vida.innerHTML = ` vida mafia :[  ${mafia}     ]   vida Neemias  :[ ${ne}  ]`
            
         
         
            
        }else if (golpe[1].checked){
            if(mafia%10 ==0){
                mafia = mafia +50
            }
            mafia = mafia - 1
            ne = ne - 20
            vida.innerHTML = ` vida mafia :[  ${mafia}     ]   vida Neemias  :[ ${ne}  ]`
            msg.innerHTML = " Neemias, causou:[ 1 ]de dano mafioso causa[ 20 ]"
           
        }else if (golpe[2].checked){
            if(mafia%10 ==0){
                mafia = mafia +50
            }
            mafia = mafia - 40
            ne = ne - 20
            vida.innerHTML = ` vida mafia :[  ${mafia}     ]   vida Neemias  :[ ${ne}  ]`
            msg.innerHTML = " Neemias, causou:[ 40 ]de dano mafioso causa[ 20 ]"
        }else if (golpe[3].checked){
            if(mafia%10 ==0){
                mafia = mafia +50
            }
            msg.innerHTML = "Neemias recupera [20]de vida mafioso recupera [15] de vida "
            mafia = mafia + 15
            ne = ne + 20
            vida.innerHTML = ` vida mafia :[  ${mafia}     ]   vida Neemias  :[ ${ne}  ]`
        }
         
         
         
         
         
           
           

    }else if(vidavc <= 0){
        img.src = "derrota.png"
        imgs.src = "vazio.png"
        msg.innerHTML = 'DERROTA'
    }else if(vidaing <= 0){
        if(vidasua ==150 && vidaad ==901){
            msg.innerHTML = 'quando Neemias da o golpe final no dog um policial passa e vê a situação Ney é preso e levado a jugamendo o dono do dog o processou por matar o cachorro ,agora ele vai lutar pela sua liberdade digite a, b, c, ou d para dialogar e sair livre da situaçao'
            img.src = "poli.png"
            imgs.src = "vazio.png"
            vida.innerHTML = ` Reputação do Acusador :[ 900 ]   Reputação do Neemias  :[ ${vidasua} ]`
           
            document.getElementById("label1").innerHTML = 'Alegar legitima defesa ';
            document.getElementById("label2").innerHTML = 'Dizer que não tinha escolha ';
            document.getElementById("label3").innerHTML = 'Afirmar que o dono nao poderia deixar o cachorro na rua sozinho';
            document.getElementById("label4").innerHTML = 'Mostrar as marcas de mordida';
            vidaad = 900
        }else if(vidasua <= 0){
            img.src = "derrota.png"
            imgs.src = "vazio.png"
            msg.innerHTML = 'DERROTA'
        }else if(vidaad <= 0){
            msg.innerHTML = 'vitoria'
            img.src = "vit.png"
            imgs.src = "vazio.png"
        }else if(golpe[0].checked){
            img.src = "terno.png"
            imgs.src = "mentira.png"
            msg.innerHTML = 'voce usou um bom argumento, causou:[ 10 ]de dano a moral do acusador o acusador usou um mau argumento, deu : [ 8 ] de dano a sua credibilidade'
            vidaad = vidaad -10
            vidasua = vidasua - 8
            
            vida.innerHTML =`  Reputação do Acusador  :[ ${vidaad}  ]   Reputação do Neemias hp :[ ${vidasua} ] `
        }else if(golpe[1].checked){
            img.src = "escolha.png"
            imgs.src ="pedra.png"
            
            msg.innerHTML = "Neemias usaou um argumento eficaz, causou:[ 15 ]de dano a credibilidade. acusador mostra fotos de Ney matando o dog , ele causa: [ 15 ] de dano a imagem de ney"
            vidaad = vidaad -15
            vidasua = vidasua - 15
            vida.innerHTML =`  Reputação do Acusador :[ ${vidaad}   ]   Reputação do Neemias hp :[ ${vidasua} ] `
        }else if(golpe[2].checked){
            msg.innerHTML = "Neemias usa um argumento lendario, causa 20 ]de dano a credibilidade do acusador acusador apela para video do dog brincando com crinças e afirma que o dog era um otimo cachorro,ney perde[ 30 ]"
            vidaad = vidaad -20
            vidasua = vidasua - 30
            img.src = "quase.png"
            imgs.src = "dog2.png"
            vida.innerHTML =`  Reputação do Acusador :[ ${vidaad}   ]   Reputação do Neemias hp :[ ${vidasua} ] `
        }else if(golpe[3].checked){
            msg.innerHTML = "ney recupera sua credibilidade mostrando as marcas de mordias pelo corpo[25]reputação acusador recupera acredibilade com depoimento do dono do dog chorrando [+15]reputação"
            vidaad = vidaad +15
            vidasua = vidasua +25
            img.src = "mordida2.png"
            imgs.src = "fim.png"
            vida.innerHTML =`  Reputação do Acusador :[ ${vidaad}   ]   Reputação do Neemias hp :[ ${vidasua} ] `
   
        }
    }


    

    
   
   
   
}
