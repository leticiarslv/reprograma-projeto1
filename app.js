const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const ListarLivrosOrdenados = require('./controllers/ListarLivrosOrdenados')
const listarRecomendados = require('./controllers/listarRecomendados')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')

const resposta = read.question(`
================= Menu ===================

1- CATEGORIA: Buscar livro por categoria
2- ORDENAR: Ordenar livros por quantidade de paginas
3- RECOMENDADOS: Buscar livros recomendados
4- LISTA DE DESEJO: Buscar livros nao lidos

5-SAIR

Digite um numero [1-5] :
`)



switch (resposta) {
    case '1':
        buscarLivros()
        break
    case '2':
        ListarLivrosOrdenados()
        break
    case '3':
        listarRecomendados()
        break
    case '4':
        listarLivrosNaoLidos()
    case '5':
        return
    default:
        console.log('Escolha uma das opções de 1 a 5! ')
        break
}

