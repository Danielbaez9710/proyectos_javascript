const numbers = [1,2,3,4,3,1,0,9,10,6,8,9,3,18]

//! en el metodo reduce en el segundo parametro es cada elemento del array
const x =numbers.reduce((sum,item)=> sum + item,0)
console.log(x);

const y = numbers.reduce((obj,item) => {
    // console.log(obj[item]);
    //!para el caso en que el valor en ese item no exista , ya que es --> !undefined  = true
    if( !obj[item]){
        obj[item]=1;
    }
    else{
        obj[item]=obj[item]+1;
    }
    // console.log(obj ,'item: ', item);
    return obj;
}, {})

console.log(y);

const rangos = numbers.reduce((obj,item) => {
    // console.log(obj[item]);
    if( item > 0 && item <= 5 ){
        obj['1-5']++;
    }
    else if( item >= 6 && item <= 8 ){
        obj['6-8']++;
    }
    else if( item >= 9 && item <= 10 ){
        obj['9-10']++;
    }
    else if(  item > 10 ){
        obj['Mayor a 10']++;
    }
    // console.log(obj ,'item: ', item);
    return obj;
}, {'1-5':0, '6-8':0,'9-10':0,'Mayor a 10':0})
console.log(rangos);

const data = [
{
    name: "Nicolas",
    level: "low",
},
{
    name: "Andrea",
    level: "medium",
},
{
    name: "Zulema",
    level: "hight",
},
{
    name: "Santiago",
    level: "low",
},
{
    name: "Valentina",
    level: "medium",
},
{
    name: "Lucia",
    level: "hight",
},
];

const rta = data.map( item => item.level).reduce((obj,item) => {
    if(!obj[item]){
        obj[item]=1;
    }
    else{
        obj[item] = obj[item] +1;
    }
    return obj;
},{})

console.log(rta);