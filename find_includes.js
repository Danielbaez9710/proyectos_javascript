const numbers = [1, 30, 41, 29, 50, 60]
console.log(numbers.find(item => item == 30));

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  //! el metodo find encuentra y retorna el elemento , el metodo findIndex encuentra y retorna la posicion en el array
console.log('elemento: ',products.find(item => item.name === 'Pizza'));
console.log('posicion: ',products.findIndex(item => item.name === 'Pizza'));

const pets = [ "cat", "dog", "bat" ]

//!el metodo includes no necesita de una arrow function
console.log(pets.includes(  'dog'));