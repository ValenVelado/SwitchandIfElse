import readline from "readline";

let tipoUsuario = "normal"

let fecha = 2024

let total = 30.50

let isRequired = false

let isAdmin = true

let friends = [
    "Ezequiel",
    "Gabriela", 
    "Miranda" ,
    "Ale"
]

const persona = {
    nombre: "valeria",
    edad: 22,
    país: "El Salvador"
}

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const calcularDescuento = (tipoUsuario, totalAPagar) => {
    if (tipoUsuario == "premium") {
        let resultado;
        let descuento = 30
        let subtotal = (totalAPagar*descuento)/100

        return resultado = totalAPagar - subtotal   
    } else if(tipoUsuario == "normal") {
        let resultado;
        let descuento = 10
        let subtotal = (totalAPagar*descuento)/100

        return resultado = totalAPagar - subtotal  

    } else if (tipoUsuario == "comun") {
        let resultado;
        let descuento = 5
        let subtotal = (totalAPagar*descuento)/100

        return resultado = totalAPagar - subtotal  
    }
}

const verificarUsuario = (tipoUsuario, totalAPagar) => {
    if (tipoUsuario == "premium") {
       
    calcularDescuento(totalAPagar, tipoUsuario)

    console.log(`su total a pagar es ${calcularDescuento (tipoUsuario, totalAPagar)} obtuvo un 30% de descuento porque 
    es cliente premium`);  

    
    } else if (tipoUsuario == "normal") {
        console.log(`su total a pagar es ${calcularDescuento (tipoUsuario, totalAPagar)} obtuvo un 30% de descuento porque 
       es cliente normal`);  

    }else if (tipoUsuario == "comun") {
        console.log(`su total a pagar es ${calcularDescuento (tipoUsuario, totalAPagar)} obtuvo un 30% de descuento porque 
    es cliente comun`);  
    
    }else {
        console.log("porfavor ingrese un usuario valido");
    }   
}

const preguntarAlUsuario = () => {
interfaz.question("porfavor ingrese el tipo de usuario\nnormal, \npremium", (tipoUsuario) =>{
    
    interfaz.question("hola ingrese su total a pagar", (total)=> {
        let totalAPagar = parseFloat(total)

        verificarUsuario(tipoUsuario, totalAPagar)
    
    })
})
}

preguntarAlUsuario()

