/* test("nome do teste", function () {
  console.log("e assim, funciona?");
}); */

const calculadora = require("../models/calcul.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});
