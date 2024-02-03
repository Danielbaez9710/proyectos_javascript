const numbers = [1,2,3,4,3,1,0,9,10,6,8,9,3,18]
const numbers2 = [1,3,5]
console.log(numbers2.some( item => item % 2 === 0))

const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]
//! Some para cumplir cuando al menos uno de los elementos cumplen y Every para cumplir con que todos deben cumplir con la condicion
console.log(orders.some(item => item.delivered));
console.log('impar: ',numbers2.every(item => item % 2 !== 0));

const team = [
{
    name: "Nicolas",
    age: 12,
},
{
    name: "Andrea",
    age: 8,
},
{
    name: "Zulema",
    age: 2,
},
{
    name: "Santiago",
    age: 18,
},
];

console.log('menores a 15 años: ',team.every(item => item.age < 15));

const array=[]
//caso en que el array este vacio se aplica el false
console.log('reto', array.length ? array.every(item => item % 2 === 0): false);