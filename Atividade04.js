// Array com os gastos mensais

const gastos = ["500", "350.50", "1000"];

function calcularTotal(listaGastos) {
    let total = 0;

    for (let i = 0; i < listaGastos.length; i++) {
        let valor = Number(listaGastos[i]);

        if (isNaN(valor)) {
            continue;
        }

        total += valor;
    }

    return total;
}

const total = calcularTotal(gastos);

console.log(`Total: R$ ${total.toFixed(2)}`);

if (total > 2000) {
    console.log("Limite ultrapassado");
} else {
    console.log("Gastos dentro do limite");
}


// entrada 02

const custos = ["800", "900", "700"];