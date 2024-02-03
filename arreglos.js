const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War'
};

console.log( personaje );
console.log('Nombre', personaje.nombre );
console.log('Nombre', personaje['nombre'] );
console.log('Edad', personaje.edad );

console.log('Coors', personaje.coords );
console.log('Lat', personaje.coords.lat );
console.log('# trajes: ',personaje.trajes.length);
console.log('Ultimo traje: ',personaje.trajes[personaje.trajes.length-1]);


const propiedades = Object.getOwnPropertyNames( personaje.coords );
const valores     = Object.values( personaje );
console.log({ propiedades, valores });