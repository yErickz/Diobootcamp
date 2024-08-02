class FormaDeBolo{ 
    constructor(saborDaMassa, saborRecheio){    
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
       
    }

    assar(){
        console.log(`Assando bolo de ${this.saborDaMassa}`)
    }
}

let boloFesta = new FormaDeBolo("Chocolate", "Morango");
let bolofinalDeSemana = new FormaDeBolo("baunilha", "nutela")


boloFesta.escrever()
bolofinalDeSemana.escrever()
boloFesta.assar()
bolofinalDeSemana.assar()