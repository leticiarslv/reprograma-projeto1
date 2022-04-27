const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () => {
    const listarLidos = read.question('Deseja listar os livros que ja foram lidos e recomendados?  S/N: ').toUpperCase()

    if (listarLidos === 'S') {
        const livrosLidos = livros.filter(livro => livro.leu === true)
        console.table(livrosLidos)

    }
}





module.exports = listarRecomendados