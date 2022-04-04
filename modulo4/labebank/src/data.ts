export type Users = {
    name: string,
    cpf: string,
    datadenascimento: Date,
    saldo: number,
    transacoes: Extrato[]
}

export type Extrato = {
    valor: number,
    data: string | number | Date,
    descricao: string
}

export const users: Users[] = [
    {
        name: "Bob",
        cpf: "111.111.111-11",
        datadenascimento: new Date("1992-02-08"),
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
        datadenascimento: new Date("1994-12-01"),
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
        datadenascimento: new Date("1994-08-25"),
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
        datadenascimento: new Date("2020-02-29"),
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
        datadenascimento: new Date("2010-08-24"),
        saldo: 500,
        transacoes: [{
            valor: 205,
            data: "20/03/2022",
            descricao: "Conta"
        }]
    }
]