// HASH --> ee77182a297c55dd7bc355c02957ad5a 
// S = 7
var lista = [4,2,7,1,2,3,4,5,6,7,8,75,23]
var S = 7;


function encontrarValorS(list, S) {
    console.log('==================================================');
    console.log('Su lista inicial de valores es: ', list);
    console.log('Su variable S seleccionado es: ',S);
    // Buscamos cada elemento de la lista y lo volvemos un string para poder filtrar cada digito del numero
    list = list.map(item => item.toString().split('').filter(digit => parseInt(digit) < S).join(''));
    

    // Aqui eliminamos los elementos vacíos después de filtrar
    list = list.filter(item => item.length > 0);

    // volvemos a transformar la lista a una lista numerica y por ultimo cambiar las posiciones
    list = list.map(item => parseInt(item));
    list = list.reverse();

    // Mostrar el resultado en la consola
    console.log('La nueva lista es: ',list);
    console.log('==================================================');
}

// encontrarValorS(lista, S); 

function listaCuadrada(list, S){
    console.log('==================================================');
    console.log('Su lista inicial de valores es: ', list);
    console.log('Su variable S seleccionado es: ',S);
    // buscamos el limite del filtro para la nueva lista
    const tope = parseInt([S,S].join(''))
    
    if(list.length > 0){
        // buscamos cada elemento de lista para elevarlo al cuadrado y luego filtrar la lista a su tope de 
        let listaCuadrada = list.map(item => item * item).filter(item => item <= tope) ;
        
        listaCuadrada = ascendentSort(listaCuadrada)
        console.log(listaCuadrada);
    }
    else{
        console.log('La lista está vacía');
    }
    console.log('==================================================');
}

function ordenamientoAscendente(lista) {    
    // ordenamos la lista por medio de algoritmo burbuja
    for (let i = 0; i < lista.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[j] < lista[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Intercambiar los elementos en minIndex y i
            let temp = lista[minIndex];
            lista[minIndex] = lista[i];
            lista[i] = temp;
        }
    }
    return lista;
}

// listaCuadrada(lista, S)
const monedas = [4,6,1,2,3];


function menorCambio(monedas){
    monedas.sort((a,b) => a - b);
    console.log(monedas); 
    // el menor cambio inicial para todos los casos es 1
    let menorCambio = 1;
    for (let i = 0; i < monedas.length; i++) {
        
        if(monedas[i] <= menorCambio){
            menorCambio += monedas[i];
        }
        else{
            break;
        }
        
    }
    console.log(menorCambio);

}

menorCambio([1, 5, 1, 1, 1, 10, 15, 20, 100])

