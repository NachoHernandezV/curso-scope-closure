//example 1
function iniciar() {
    var nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
    function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
      console.log(nombre);  // Usa una variable declarada en la función externa.
    }
     mostrarNombre();
  }
  iniciar();

  //example 2
// ámbito global
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // ámbito de funciones externas
      return function (d) {
        // ámbito local
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20