console.log("Escribe el texto a leer:");            
var stdin = process.openStdin();            //funcion de lectura de texto para validar

stdin.addListener("data", function (d) {

    //variables que almacenan contador de apariciones

    let corchetes_abiertos = 0;
    let corchetes_cerrados = 0;


    let llaves_abiertos = 0;
    let llaves_cerradas = 0;



    let parentesis_abiertos = 0;
    let parentesis_cerradas = 0;


    //ciclo que recorre el string ingresado
    for (i = 0; i < d.length; i++) {


        switch (d.toString().charAt(i)) {       //lectura caracter por caracter y ver que simbolo corresponde

            case '{':

                llaves_abiertos++;

                break;


            case '}':

                llaves_cerradas++;

                break;


            case '[':

                corchetes_abiertos++;

                break;


            case ']':


                corchetes_cerrados++;

                break;

            case '(':

                parentesis_abiertos++;

                break;


            case ')':


                parentesis_cerradas++;

                break;
        }


       
    }


    //Validaciones de que se podía esperar
    if(parentesis_abiertos!=parentesis_cerradas) console.log("se esperaba )") ;


    if(llaves_abiertos!=llaves_cerradas) console.log("se esperaba }") ;


    if(corchetes_abiertos!=corchetes_cerrados) console.log("se esperaba ] ") ;


    if(parentesis_abiertos==parentesis_cerradas && llaves_abiertos == llaves_cerradas && corchetes_abiertos == corchetes_cerrados) console.log("Todo en orden");



});


