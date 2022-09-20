/**
 * 1. La función createTable recibe como parámetro
 * un arreglo de usuarios dónde cada uno tiene "id" y "name".
 * 
 *  Realizar la implementación para regresar un <table> de HTML con 
 *  la columna del ID y NOMBRE. 
 * 
 *  <table>
 *    <thead>
 *    </thead>
 *    <tbody>
 *    </tbody>
 *  </table>
 */
function createTable(users) {
  return `
    <table>
      <thead>
        <th>ID</th>
        <th>NOMBRE</th>
      </thead>
      <tbody>
        ${users.map(({id, name}) => `
          <tr>
            <td>${id}</td>
            <td>${name}</td>
          </tr>
        `).join('\n')}
      </tbody>
    </table>
  `;
}

const result1 = createTable([
  {
    id: 1,
    name: "Jorge"
  },
  {
    id: 2,
    name: "Francisco"
  }
]);

console.log(result1);

/**
 * 2. La función minMax recibe un arreglo de números.
 * 
 *  Realizar la implementación para regresar en un objeto el número
 *  mínimo y el número máximo.
 */

function minMax(array) {
  return {
    min: Math.min(...array),
    max: Math.max(...array)
  }
}

const result2 = minMax([1, 2, 3, -100]); // { min: -100, max: 3 }

console.log(result2);

/**
 * 3. La función unique recibe un arreglo de números.
 * 
 * Realizar la implementación para regresar los elementos únicos del arreglo.
 */
function unique(array) {
  return [...new Set(array)];
}

const result3 = unique([1,1,1,10,-100,1,2,2,2,2,2,2,1,1,2,2,2,3,3,3,3,4]); // [1,2,3,4];

console.log(result3);