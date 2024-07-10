let horasTrabalhadas = parseFloat(prompt("Insira o número de horas trabalhadas: "));
let valorHora = parseFloat(prompt("Insira o valor da hora trabalhada: "));

// Calcula o salário bruto
let salarioBruto = horasTrabalhadas * valorHora;

// Calcula o desconto da previdência social (20% do salário bruto)
let previdenciaSocial = 0.2 * salarioBruto;

// Calcula o desconto de imposto de renda (10% do salário bruto)
let impostoRenda = 0.1 * salarioBruto;

// Calcula o salário líquido (salário bruto menos descontos)
let salarioLiquido = salarioBruto - previdenciaSocial - impostoRenda;

// Calcula o desconto fixo de 5% sobre o salário líquido
let descontoFixo = 0.05 * salarioLiquido;

// Calcula o salário final (salário líquido menos desconto fixo)
let salarioFinal = salarioLiquido - descontoFixo;

console.log("O salário final é: R$ " + salarioFinal.toFixed(2));
