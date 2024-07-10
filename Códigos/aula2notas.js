let nota = prompt("Digite sua nota:");

if (nota >= 9) {
  console.log("Aprovado com Louvor");
} else if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
