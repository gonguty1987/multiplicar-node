const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla multiplicar', opts)
    .command('crear', 'Genera archivo', opts)
    .help()
    .argv;

module.exports = {
    argv
}