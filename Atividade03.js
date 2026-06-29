// String contendo os autores

const autores = "Machado de Assis,Clarice Lispector,Monteiro Lobato";

const listaAutores = autores.split(",");

console.log("Lista de autores:");
listaAutores.forEach(autor => {
    console.log(autor);
});

const autorProcurado = "Clarice Lispector";

if (listaAutores.includes(autorProcurado)) {
    console.log("\nAutor encontrado");
} else {
    console.log("\nAutor não encontrado");
}

function cadastrarLivro(titulo, autor) {
    return `Livro: "${titulo}" - Autor: ${autor}`;
}

console.log("\n" + cadastrarLivro("Dom Casmurro", "Machado de Assis"));

console.log("\nAutores:");
console.log(listaAutores.join(" | "));


// entrada 02

const autores2 = "J. K. Rowling,J. R. R. Tolkien";

const autorsearch = "Machado de Assis";