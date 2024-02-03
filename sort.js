const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
]
const numbers = [1, 30, 4, 21, 100000]
//sort con numeros
console.log(numbers.sort((a,b)=> a -b))
console.log(numbers.sort((a,b)=> b - a));
//sort segun estandar asscii
console.log(words.sort());

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

console.log(orders.sort((a,b) => b.total - a.total));

const array = ['a', 'bb', 'ccc']; 
const rta = array.map(item => item.length);
console.log(rta);