// array de salários e aplicação dos aumentos com o map()
const salarios = [1000, 1500, 1800, 2000, 2500, 1900, 2200, 2900, 2300, 2700];

const salariosNovos = salarios.map(salario => {
  if (salario <= 2000) {
    return salario * 1.15; // + 15% para salários até 2000
  } else {
    return salario * 1.1; // + 10% para salários acima de 2000
  }
});


console.log("salários novos:", salariosNovos);

// filtrar salários superiores à 2500
const salariosSuperiores2500 = salariosNovos.filter(salario => salario > 2500);

console.log("salários superiores a 2500:", salariosSuperiores2500);

// soma dos valores usando o reduce()
const somaSalariosSuperiores2500 = salariosSuperiores2500.reduce((acumulador, salario) => acumulador + salario, 0);

console.log("soma com salários superiores a 2500:", somaSalariosSuperiores2500);
