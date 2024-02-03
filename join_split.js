//! join usa un array y lo convierte en un string , se le ingresa por entrada el separador
//! split usa un string y lo convierte en un array, se le ingresa por entrada el separador
const elements = ["hola", "como", "estas"]
const ejemplo = 'buenas tardes, como se encuentra, mi señor. '

console.log(elements.join('--'));

//! lo que va dentro de las cmoillas del split es el separador por el que se quiere condicionar la division de los caracteres
const array ='buenas tardes joven'
console.log(array.split(' '));    // ['buenas', 'tardes', 'joven']
console.log(ejemplo.split(', ')); // ['buenas tardes', 'como se encuentra', 'mi señor. ']

const title = 'curso de manipulacion de arrays'
const url = title.split(' ').join('--').toLowerCase();
console.log(url);

const Input =[
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]
  const Input2 =[]
  const new_array = Input.flat();
  const x = new_array.join(' ').split(' ')

  console.log(Input.length ? new_array.join(' ').split(' ').length :0); 