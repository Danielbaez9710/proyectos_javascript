// HASH --> ee77182a297c55dd7bc355c02957ad5a 
// S = 7
var lista = [1, 2, 3, 5, 6, 8, 9];
var S = 7;

function listaCuadrada(list, S){
    console.log('==================================================');
    console.log('Su lista inicial de valores es: ', list);
    console.log('Su variable S seleccionado es: ',S);
    // buscamos el limite del filtro para la nueva lista
    const tope = parseInt([S,S].join(''))
    
    if(list.length > 0){
        // buscamos cada elemento de lista para elevarlo al cuadrado y luego filtrar la lista a su tope de 
        let listaCuadrada = list.map(item => item * item).filter(item => item <= tope) ;
        
        listaCuadrada = ordenamientoAscendente(listaCuadrada)
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

listaCuadrada(lista, S)