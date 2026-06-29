// Array de disciplinas

let disciplinas = ["HTML", "CSS", "JavaScript"];


console.log("Disciplinas:");
disciplinas.forEach(disciplina => {
    console.log(disciplina);
});

console.log(`\nTotal: ${disciplinas.length}`);

if (disciplinas.includes("JavaScript")) {
    console.log("\nAluno cursa JavaScript");
} else {
    console.log("\nAluno não cursa JavaScript");
}

disciplinas.push("Algoritmos");

console.log("\nLista após adicionar uma disciplina:");
console.log(disciplinas);

console.log("\nPercorrendo as disciplinas:");
for (let i = 0; i < disciplinas.length; i++) {

    if (disciplinas[i] === "") {
        continue;
    }

    console.log(disciplinas[i]);

    if (disciplinas[i] === "TCC") {
        console.log("Laço interrompido");
        break;
    }
}

// entrada 02

let disciplinas1 = [
    "Banco de Dados",
    "",
    "TCC",
    "Redes"
];
