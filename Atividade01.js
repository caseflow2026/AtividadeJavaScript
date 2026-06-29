// Objeto do produto

const produto = {
    nome: "Monitor",
    categoria: "Informática",
    preco: "899.90",
    estoque: 5
};

produto.preco = Number(produto.preco);


if (isNaN(produto.preco)) {
    console.log("Preço inválido.");
} else {

    
    function exibirProduto(produto) {
        console.log(`Produto: ${produto.nome}`);
        console.log(`Categoria: ${produto.categoria}`);
        console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
        console.log();

        if (produto.estoque < 10) {
            console.log("Estoque baixo");
        } else {
            console.log("Estoque adequado");
        }

        console.log();

        console.log(Object.keys(produto));

        console.log();

        console.log("Propriedades e valores:");
        Object.entries(produto).forEach(([chave, valor]) => {
            console.log(`${chave}: ${valor}`);
        });

        console.log();

        console.log("Tipos das informações:");
        Object.entries(produto).forEach(([chave, valor]) => {
            console.log(`${chave}: ${typeof valor}`);
        });
    }

    exibirProduto(produto);
}

// Entrada 02

const produto = {
    nome: "Cadeira",
    categoria: "Escritório",
    preco: "450",
    estoque: 30
};


