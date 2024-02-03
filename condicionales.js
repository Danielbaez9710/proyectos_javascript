const diaLetras=['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
let dia=0;
console.log(diaLetras[dia] || 'dia no definido');

let horaApertura;
let horaActual=10;

horaApertura= ([0,6].includes(dia))? 9 : 11;
mensaje= ([0,6].includes(dia))? 'Es fin de semana: '+diaLetras[dia] : 'Es entre semana: '+diaLetras[dia];
hora= ( horaActual >= horaApertura )? 'Esta abierto, son las '+horaActual : 'Esta cerrado, son las '+horaActual
console.log(mensaje,horaApertura,hora);

const nota= 50;
const aprobar = nota >= 95 ? 'A+':
                nota >= 85 ? 'A' :
                nota >= 70 ? 'B' :
                nota >= 50 ? 'C' :
                'D'

console.log(aprobar);