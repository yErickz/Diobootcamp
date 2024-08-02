class Heroi{
    constructor(nome, idade, TipoDoPersonagem){
        this.nome = nome
        this.idade = idade
        this.TipoDoPersonagem = TipoDoPersonagem
    }

    atacar(){

        let ataque
        switch(this.TipoDoPersonagem){
            case "mago":
                ataque = "Usou Magia"
                break
            case "guerreiro":
                ataque = "usou Espada"   
                break
            case "monge":
                ataque = "Usou Artes Marciais"
                break
            case "ninja":
                ataque = "usou Shuriken"
                break
        }
        console.log(`O ${this.TipoDoPersonagem} atacou usando ${ataque}`)
    }
}

let heroi1 = new Heroi('Arthus', 30, 'guerreiro');
heroi1.atacar()

let heroi2 = new Heroi('Zara', 25, 'mago');
heroi2.atacar()
let heroi3 = new Heroi('Liang', 40, 'monge');
heroi3.atacar()
let heroi4 = new Heroi('Shin', 28, 'ninja');
heroi4.atacar()