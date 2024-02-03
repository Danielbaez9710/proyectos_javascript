const monedas = [4,6,1,2,3];


function menorCambio(monedas){
    monedas.sort((a,b) => a - b);
    
    // el menor cambio inicial para todos los casos es 1
    let menorCambio = 1;
    for (let i = 0; i < monedas.length; i++) {
        
        if(monedas[i] <= menorCambio){
            menorCambio += monedas[i];
        }
        else{
            break;
        }
        
    }
    console.log(menorCambio);

}

menorCambio([1, 5, 1, 1, 1, 10, 15, 20, 100]);