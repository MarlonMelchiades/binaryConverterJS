const readLine = require("readline-sync");

// ----- Funções----- //

entradaDados = function entrada(texto) {
  dado = readLine.question(texto);
  return dado;
};

function converterBinario() {
  console.log("Insira sua numeração binária:");
  entradaDados();
  const binarioInd = dado.split("");
  const dadosSoma = [];
  var soma = 0;
  var contador = binarioInd.length - 1;
  binarioInd.forEach((element) => {
    var calculoExpoente = Math.pow(2, contador);
    var calculo = element * calculoExpoente;
    if (contador >= 0) {
      contador = contador - 1;
    }
    dadosSoma.push(calculo);
  });
  for (var i = 0; i < dadosSoma.length; i++) {
    soma += dadosSoma[i];
  }
  console.log("\nO número decimal do binário " + dado + " é " + soma + "!\n");
}

function converterDecimal() {
  function condicaoDecimal(calculo, modulo) {
    if ((calculo !== 1 && modulo == 1) || (calculo !== 1 && modulo == 0)) {
      binario.unshift(modulo);
      calculoDecimal(parseInt(calculo));
    }
    if (calculo === 1 && modulo == 0) {
      binario.unshift(modulo);
      binario.unshift(1);
      console.log(
        "\nO número binário do decimal " +
          dado +
          " é " +
          binario.join("") +
          "!\n"
      );
    }
  }

  function calculoDecimal(valor) {
    var calculo = valor / 2;
    var modulo = valor % 2;
    condicaoDecimal(calculo, modulo);
  }

  console.log("Insira sua numeração decimal:");
  entradaDados();
  var binario = [];
  calculoDecimal(dado);
}

function condicao(a) {
  if (a == 1) {
    console.log("\nConverter número binário.\n");
    converterBinario();
  } else if (a == 2) {
    console.log("\nConverter número decimal.\n");
    converterDecimal();
  }
}

function escolherFuncao() {
  console.log("\nConversor Binário-Decimal\n");

  console.log("Que converter qual numeração?\n");

  console.log("1.Binário");
  console.log("2.Decimal");

  entradaDados("\nSelecione:");
  condicao(dado);
}

// ----- Programa ----- //

escolherFuncao();
