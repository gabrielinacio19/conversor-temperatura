const valor = document.getElementById("valor");
const origem = document.getElementById("origem");
const destino = document.getElementById("destino");
const botao = document.getElementById("converter");
const resultado = document.getElementById("resultado");

function converterParaCelsius(temperatura, unidadeOrigem) {
    if (unidadeOrigem === "fahrenheit") {
        return (temperatura - 32) * 5 / 9;
    }

    if (unidadeOrigem === "kelvin") {
        return temperatura - 273.15;
    }

    return temperatura;
}

function converterDeCelsius(temperatura, unidadeDestino) {
    if (unidadeDestino === "fahrenheit") {
        return (temperatura * 9 / 5) + 32;
    }

    if (unidadeDestino === "kelvin") {
        return temperatura + 273.15;
    }

    return temperatura;
}

function converterTemperatura() {
    const temperatura = Number(valor.value);
    const unidadeOrigem = origem.value;
    const unidadeDestino = destino.value;

    const temperaturaEmCelsius =
        converterParaCelsius(temperatura, unidadeOrigem);

    const temperaturaConvertida =
        converterDeCelsius(temperaturaEmCelsius, unidadeDestino);

    resultado.textContent =
        `Resultado: ${temperaturaConvertida.toFixed(2)}`;
}

botao.addEventListener("click", converterTemperatura);