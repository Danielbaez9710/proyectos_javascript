let a =10,
    b=20,
    c=29,
    d=18

// console.info(a);
// console.table({a,b,c,d});

let juegos = ['Pokemon','Resident Evil','GOW','Quarry'];
console.log('Largo: ',juegos.length);
console.log(juegos[2]);
console.log(juegos.slice(0,3));

console.log('%c Iteracion: ' ,'color:blue; font-size:16px');
juegos.forEach((valor,indice,arr)=>{
    console.log(valor, indice,arr);
})
juegos.push('Valorant');
console.table(juegos);