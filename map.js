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
  
const x =orders.map(item => item.total);
console.log(orders, x);

const y = orders.map(item => {
    // item.tax = .19
    return {
        ...item,
        tax: .19
    }
})
console.log(y);