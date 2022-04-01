export type Users = {
    name: string,
    cpf: string,
    datadenascimento: string,
    saldo: number,
    transacoes: Extrato[]
}

export type Extrato = {
    valor: number,
    data: string,
    descricao: string
}

export const users: Users[] = [
    {
        name: "Bob",
        cpf: "111.111.111-11",
        datadenascimento: "20 / 08 / 1992",
        saldo: 10,
        transacoes: [{
            valor: 20,
            data: "20/03/2022",
            descricao: "Conta"
        }]
    },
    {
        name: "Grazielle",
        cpf: "222.111.111-11",
        datadenascimento: "08 / 12 / 1994",
        saldo: 200,
        transacoes: [{
            valor: 5000,
            data: "20/03/2022",
            descricao: "Conta"
        }]
    },
    {
        name: "Arthur",
        cpf: "333.111.111-11",
        datadenascimento: "28 / 08 / 1994",
        saldo: 300,
        transacoes: [{
            valor: 220,
            data: "20/03/2022",
            descricao: "Conta"
        }]
    },
    {
        name: "Levi",
        cpf: "444.111.111-11",
        datadenascimento: "28 / 09 / 2020",
        saldo: 250,
        transacoes: [{
            valor: 2000,
            data: "20/03/2022",
            descricao: "Conta"
        }]
    },
    {
        name: "Junior",
        cpf: "555.111.111-11",
        datadenascimento: "24 / 12 / 2010",
        saldo: 500,
        transacoes: [{
            valor: 205,
            data: "20/03/2022",
            descricao: "Conta"
        }]
    }
]