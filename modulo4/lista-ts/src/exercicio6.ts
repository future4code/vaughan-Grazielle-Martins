type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const listaDeClientes: Cliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function saldoNegativo(usuariosnegativos: Cliente[]) {
    const valorinicial = 0
    const atualizacaoDosDebitos = listaDeClientes.map((usuario) => {
        const reduce = usuario.debitos.reduce(
            (valores, valoratual) => valores + valoratual,
            valorinicial
        )

        return {
            cliente: usuario.cliente,
            saldoTotal: usuario.saldoTotal - reduce,
            debitos: []
        }

    }).filter( usuarioNegativo => usuarioNegativo.saldoTotal < 0)

    return atualizacaoDosDebitos
}
console.log(saldoNegativo([]))
