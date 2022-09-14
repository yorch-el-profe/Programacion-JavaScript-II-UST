// Map permite almacenar valores (de cualquier tipo) 
// y asociarlos a una llave (de cualquier tipo)
const map = new Map();

// Asociando la llave my-key al valor my-value
map.set("my-key", "my-value");

function weirdKey() {}

// Asociando una función a un valor 0
map.set(weirdKey, 0);

// Recuperar el valor utilizando la misma llave con la que lo almacene
console.log(map.get(weirdKey));

console.log(map);

// Set siguen la misma lógica que en matemáticas.
// Los conjuntos son una colección de elementos que no se repiten y que no tienen orden.
const set = new Set();

set.add(true);
set.add(0);
set.add(new Set());
set.add(0); // Se elimina del conjunto por estar repetido

console.log(set);

// Para extraer los valores utilizo la función "values"
set.values(); // Obtengo un iterable del conjunto

// La ñera: Utilizar el spread operator
const uniques = [...set];

// Conviertiendo el Set en un Array
console.log(uniques);