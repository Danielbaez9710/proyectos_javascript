const products = [
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];
console.log(products);
const myProducts = []
// const product = products.find(item => item.title == 'Pizza')
// console.log(product);
const productIndex = products.findIndex(item => item.title == 'Pizza')

//!metodo splice elimina uno o varios elementos, primer parametro la posicion del elemento en el array y segundo cuanto elemento quiero eliminar de ahi en adelante
if(productIndex){
    myProducts.push(products[productIndex])    
    products.splice(productIndex,1)
}
console.log(products);
console.log(myProducts);

const products2 = [
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id :'🥞',
    changes:{
        price : 304,
        description: 'Ta maluco'
    }

}

productIndex2 = products2.findIndex( item => item.id == update.id);
//aplica los datos que ya habian y respeta los que ya estan 
products2[productIndex2]= {
    ...products2[productIndex2],
    ...update.changes
}
console.log(products2);