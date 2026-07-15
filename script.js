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