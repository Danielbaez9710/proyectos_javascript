const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]
const x= numbers1.concat(numbers2)

console.log(x);

//! al usar push de un array dentro de otro , almacenara el array en un registro , cambio si se usa el spread en el push copiara cada elemento del array en el array externo
numbers1.push(numbers2) //  numbers1.push(...numbers2)
console.log(numbers1);

// flat
//! aplana una matriz y no importa el numero de capas que tenga
const matrix = [
    [1,2,3],
    [4,5,6 ,[3,4,]],
    [7,8,9],
  ]
// por defecto trabaja a dos capas , pero por entrada se le puede asignar el numero por si es mas extenso
console.log(matrix.flat(3));

//! flatmap es la combinacion entre un flat y un map
const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

console.log(users.map(item => item.attributes).flat());
console.log(users.flatMap(item => item.attributes));

const respuesta = [
  {
      "idIngresoBeneficio": 3,
      "campos": [
          {
              "idCampo": 0,
              "valor": [
                  {
                      "anio": "2026",
                      "valorUnitario": 1221,
                      "cantidad": 2,
                      "valorTotal": 2442,
                      "updated": true
                  },
                  {
                      "anio": "2027",
                      "valorUnitario": 0,
                      "cantidad": 0,
                      "valorTotal": 0,
                      "updated": true
                  }
              ]
          },
          {
              "idCampo": 11,
              "valor": ""
          },
          {
              "idCampo": 10,
              "valor": 2
          },
          {
              "idCampo": 9,
              "valor": 2442
          },
          {
              "idCampo": 8,
              "valor": "2027"
          },
          {
              "idCampo": 7,
              "valor": "2026"
          },
          {
              "idCampo": 6,
              "valor": "2"
          },
          {
              "idCampo": 5,
              "valor": 13
          },
          {
              "idCampo": 4,
              "valor": "qwwqwqwqwqwqwqwq"
          },
          {
              "idCampo": 3,
              "valor": 1123
          },
          {
              "idCampo": 2,
              "valor": "1.1"
          },
          {
              "idCampo": 1,
              "valor": "MODULES.PROYECTOS.FORMULARIO.STEP_PREPARACION.INGRESOS_BENEFICIOS.OPTION_BENEFICIO"
          }
      ]
  },
  {
      "idIngresoBeneficio": 2,
      "campos": [
          {
              "idCampo": 0,
              "valor": [
                  {
                      "anio": "2025",
                      "valorUnitario": 21210,
                      "cantidad": 222,
                      "valorTotal": 4708620,
                      "updated": true
                  }
              ]
          },
          {
              "idCampo": 11,
              "valor": ""
          },
          {
              "idCampo": 10,
              "valor": 222
          },
          {
              "idCampo": 9,
              "valor": 4708620
          },
          {
              "idCampo": 8,
              "valor": "2025"
          },
          {
              "idCampo": 7,
              "valor": "2025"
          },
          {
              "idCampo": 6,
              "valor": "222"
          },
          {
              "idCampo": 5,
              "valor": 3
          },
          {
              "idCampo": 4,
              "valor": "sddsdsdsdssddsds"
          },
          {
              "idCampo": 3,
              "valor": 1119
          },
          {
              "idCampo": 2,
              "valor": "1.1"
          },
          {
              "idCampo": 1,
              "valor": "MODULES.PROYECTOS.FORMULARIO.STEP_PREPARACION.INGRESOS_BENEFICIOS.OPTION_BENEFICIO"
          }
      ]
  },
  {
      "idIngresoBeneficio": 1,
      "campos": [
          {
              "idCampo": 0,
              "valor": [
                  {
                      "anio": "2026",
                      "valorUnitario": 213230,
                      "cantidad": 33,
                      "valorTotal": 7036590,
                      "updated": true
                  },
                  {
                      "anio": "2027",
                      "valorUnitario": 0,
                      "cantidad": 0,
                      "valorTotal": 0,
                      "updated": true
                  }
              ]
          },
          {
              "idCampo": 11,
              "valor": ""
          },
          {
              "idCampo": 10,
              "valor": 33
          },
          {
              "idCampo": 9,
              "valor": 7036590
          },
          {
              "idCampo": 8,
              "valor": "2027"
          },
          {
              "idCampo": 7,
              "valor": "2026"
          },
          {
              "idCampo": 6,
              "valor": "33"
          },
          {
              "idCampo": 5,
              "valor": 15
          },
          {
              "idCampo": 4,
              "valor": "assasasasasasasasa"
          },
          {
              "idCampo": 3,
              "valor": 172
          },
          {
              "idCampo": 2,
              "valor": "1.2"
          },
          {
              "idCampo": 1,
              "valor": "MODULES.PROYECTOS.FORMULARIO.STEP_PREPARACION.INGRESOS_BENEFICIOS.OPTION_INGRESO"
          }
      ]
  }
]
const listaNueva=[]
console.log(respuesta.map(ingreso => ingreso.campos));

// console.log(xx);