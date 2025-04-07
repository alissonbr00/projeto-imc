function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  if (!peso || !altura) {
    resultado.innerText = "Por favor, preencha todos os campos.";
    return;
  }

  const imc = (peso / (altura * altura)).toFixed(1);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade grau 1";
  } else if (imc < 39.9) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

  resultado.innerHTML = `
    Resultado:<br>
    Seu IMC é ${imc}<br>
    Classificação: ${classificacao}
  `;
}
