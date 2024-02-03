const words = ["spray", "elites", "limit", "apple", "exuberant","spigno"]
const new_words=[]
const x = words.filter(item => item.length > 6)
console.log('filtro ',words.filter(item => { return item.includes("sp")}));

console.log(words , x);

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

const y =orders.filter(item => item.delivered && item.total > 100);
console.log(y);

const search = (query) =>{
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Zu'));