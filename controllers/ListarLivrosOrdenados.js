const livros = require('../database')
const read = require('readline-sync')

const ListarLivrosOrdenados = () => {

    const opcaoInicial = read.question('Deseja buscar livros de forma crescente pelo numero de paginas? S/N: ').toUpperCase()

    if(opcaoInicial === 'S') {

        const nPaginas = livros.sort((a,b) => a.paginas - b.paginas)
        console.table(nPaginas)
    }
}


module.exports = ListarLivrosOrdenados