//Declaracion de cada numeros y su solicitud
let primerNumero = parseInt(prompt("Dame el primer numero: "));
let segundoNumero = parseInt(prompt("Dame el segundo numero: "));
let tercerNumero = parseInt(prompt("Dame el segundo numero: "));

//Aginacion de los numeros a una lista
let listaNumeros=[primerNumero, segundoNumero, tercerNumero];
const listaMenorMayor = listaNumeros;
const listaMayorMenor = listaNumeros;

//Primer metodo para ordenar la lista, usamos el metodo burbuja
//
const menorMayor = (lista)=>{
    let aux;
    for(i=0;i<lista.length -1;i++){
        for(j=0;j<lista.length -1 -i;j++){
            if(lista[j]>lista[j+1]){
                aux = lista[j]
                lista[j] = lista[j+1]
                lista[j+1] = aux;
            }
            else if (lista[j]==lista[j+1]) {
                console.log(`Son iguales ${lista[j]} y ${lista[j+1]}`)
            }
        }
    }
    console.log("Numeros ordenados de menor a Mayor: ", lista)
    return lista;
}

const mayorMenor= lista =>{
    let aux;
    for(i=0;i<lista.length-1;i++){
        for(j=0;j<lista.length-1-i;j++){
            if(lista[j]<lista[j+1]){
                aux = lista[j]
                lista[j] = lista[j+1]
                lista[j+1] = aux;
            }
            else if (lista[j]==lista[j+1]) {
                console.log(`Son iguales ${lista[j]} y ${lista[j+1]}`)
            }
        }
    }
    console.log("Numeros ordenados de mayor a menor: ", lista)
    return lista;
}
menorMayor(listaMenorMayor);
mayorMenor(listaMayorMenor);

/**
 * Segundo metodo utlizamos la funcion .sort de JS con if en caso
 * de que los dos parametros comparados sean iguales
 */
// Ordenar de menor a mayor
const menorMayorSort = [...listaNumeros].sort((a, b) => {
    const resultados = document.getElementById("resulatados")
    if (a === b){
        const li = document.createElement("li");
        li.textContent = (`Son iguales ${a} y ${b}`)
        resultados.appendChild(li)
        
        return a-b;
    }
    return a-b;
});

const liFinal = document.createElement("li");
liFinal.textContent = `Ordenados menor a mayor metodo sort: ${menorMayor.join(", ")}`;
resultados.appendChild(liFinal);




// Ordenar de mayor a menor  
const mayorAMenorSort = [...listaNumeros].sort((a, b) =>{
    if(a==b){
        console.log(`Son iguales ${a} y ${b}`);
        return b-a;
    }
    return b-a;
});
console.log("Lista ordenada de menor a mayor por el segundo metodo: ", ordenado)

