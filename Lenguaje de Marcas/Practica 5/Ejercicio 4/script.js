function calcular() {
    const operando1 = parseFloat(document.getElementById("operando1").value);
    const operando2 = parseFloat(document.getElementById("operando2").value);
    const operador = document.getElementById("operador").value;
    let resultado;

    switch (operador) {
        case "+":
            resultado = operando1 + operando2;
            break;
        case "-":
            resultado = operando1 - operando2;
            break;
        case "*":
            resultado = operando1 * operando2;
            break;
        case "/":
            resultado = operando2 !== 0 ? operando1 / operando2 : "Error: Div. por 0";
            break;
        default:
            resultado = "Operación no válida";
    }

    document.getElementById("resultado").value = resultado;
}
