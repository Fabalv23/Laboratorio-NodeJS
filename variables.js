



const dolar = 7.71;
const euro = 9.19;
const franco = 8.27;

const respuesta = "La cantidad en Quetzales son: "
main();



function main() {


    var moneda = "F"

    var cantidad = 25

    switch (moneda) {

        case "E":

            console.log(respuesta + ConvertirEuro(cantidad))


            break;




        case "D":

            console.log(respuesta + ConvertirDolar(cantidad))


            break;


        case "F":

            console.log(respuesta + ConvertirFranco(cantidad))

            break;


        default:

            console.log("no existe esa moneda en nuestro server")

            break;


    }
}


function ConvertirEuro(cantidad) {


    return cantidad * euro;


}




function ConvertirDolar(cantidad) {


    return cantidad * dolar;


}



function ConvertirFranco(cantidad) {


    return cantidad * franco;


}