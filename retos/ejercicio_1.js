// HASH --> ee77182a297c55dd7bc355c02957ad5a 
// S = 7
var lista = [60, 6, 5, 4, 3, 2, 7, 7, 29, 1];
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

encontrarValorS(lista,S);