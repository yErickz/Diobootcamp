    let NomeDoHeroi = "yErickz"
    let XpDoPersonagem = 5000

    let nivelDoHeroi

    if(XpDoPersonagem <= 1000){
        nivelDoHeroi = "Ferro"
    } else if(XpDoPersonagem <= 1001){
        nivelDoHeroi = "Bronze"
    }
    else if(XpDoPersonagem <= 2001){
        nivelDoHeroi = "Prata"
    }
    else if(XpDoPersonagem <= 5000){
        nivelDoHeroi = "Ouro"
    }
    else if(XpDoPersonagem <= 7001){
        nivelDoHeroi = "Platina"
    }
    else if(XpDoPersonagem <= 8000){
        nivelDoHeroi = "Ascedente"
    }
    else if(XpDoPersonagem <= 9001){
        nivelDoHeroi = "Imortal"
    }
    else if(XpDoPersonagem <= 10000){
        nivelDoHeroi = "Radiante"
    }
    
    console.log ("O Herói de nome " + NomeDoHeroi + "  está no nível de " + nivelDoHeroi)