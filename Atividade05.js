// Objeto do evento

const evento = {
    nome: "Semana da Tecnologia",
    local: "Auditório",
    data: new Date("2026-08-20"),
    participantes: ["Ana", "Carlos", "Marcos"]
};

function exibirEvento(evento) {
    console.log(`Evento: ${evento.nome}`);
    console.log(`Local: ${evento.local}`);
    console.log(`Data: ${evento.data.toLocaleDateString("pt-BR")}`);
    console.log(`Participantes: ${evento.participantes.length}`);

    if (evento.participantes.length > 0) {
        console.log("Há participantes cadastrados.");
    } else {
        console.log("Nenhum participante cadastrado");
    }

    console.log(`Local cadastrado: ${evento.hasOwnProperty("local")}`);

    console.log("\nPropriedades e valores:");
    Object.entries(evento).forEach(([chave, valor]) => {
        console.log(`${chave}: ${valor}`);
    });

    console.log("\nTipos das informações:");
    Object.entries(evento).forEach(([chave, valor]) => {
        console.log(`${chave}: ${typeof valor}`);
    });
}

exibirEvento(evento);


// entrada 2

const evento2 = {
    nome: "Workshop Angular",
    local: "Laboratório 5",
    data: new Date("2026-09-10"),
    participantes: []
};