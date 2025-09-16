
let primerNumero = parseInt(prompt("Dame el primer numero: "));

let segundonumero = parseInt(prompt("Dame el segundo numero: "));

let tercerNumero = parseInt(prompt("Dame el segundo numero: "));

let listaNumeros=[primerNumero, segundonumero, tercerNumero];
let aux;



const menorMayor = (lista)=>{
    for(i=0;i<lista.length -1;i++){
        for(j=0;j<lista.length -1 -i;j++){
            if(lista[j]>lista[j+1]){
                aux = lista[j]
                lista[j] = lista[j+1]
                lista[j+1] = aux;
            }
            else if (lista[j]==lista[j+1]) {
                console.log("Son iguales")
            }
        }
    }
    console.log("Numeros ordenados de menor a Mayor: ", lista)
    return lista;
}

const mayorMenor= lista =>{
    for(i=0;i<lista.length-1;i++){
        for(j=0;j<lista.length-1-i;j++){
            if(lista[j]<lista[j+1]){
                aux = lista[j]
                lista[j] = lista[j+1]
                lista[j+1] = aux;
            }
            else if (lista[j]==lista[j+1]) {
                console.log("Son iguales")
            }
        }
    }
    console.log("Numeros ordenados de mayor a menor: ", lista)
    return lista;
}

const listaMenorMayor = menorMayor(listaNumeros);
const lsitaMayorMenor = mayorMenor(listaNumeros);

