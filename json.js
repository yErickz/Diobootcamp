//JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados
let invoice = {
	name: "Eric",
    age: 19,
    products: {
    	0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["placa de video", "899.99"],
        3: ["monitor 27 polegadas", "12000.90"],
        4: ["Gabinete redragon", "490,99"]
    },
    

}

generateinvoice(invoice)

function generateinvoice(invoice){

    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade do comprador é ${invoice.age}`)
    console.log(`-------------------------`)

    for(let index in invoice.products){
        let [productsname, productsprice] = invoice.products[index]
        console.log(`- ${productsname}: R$ ${productsprice}`)
    }

}