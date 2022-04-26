//Exercicio 1
//a) Recebe parâmetros, que passamos quando criamos a instância da classe, acessamos através do this.
//b) apenas 1 vez
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    public getUser(): any{
        return [this.age, this.cpf, this.name, this.transactions]
    }
    public getName(): string{
        return this.name
    }
    public addTransaction(transaction: Transaction){
        this.transactions.push(transaction)
    }
    public setAge(newAge: number) : any{
        return this.age = newAge
    }
    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}

let usuario: UserAccount = new UserAccount("111", "User1", 27)
usuario.setAge(28)
//c) tem que criar métodos públicos para acessar as propriedades da classe

//Exericio 2 

class Transaction {
    private description: string;
    private value: number;
    private date: string;
    
    public getTransaction(): string{
        return this.description, this.value, this.date
    }
    constructor(description: string, value: number, date: string) {
        this.description = description
        this.value = value;
        this.date = date;
    }
}

let add: Transaction = new Transaction("pagamento", 227, "10/04/2022")
usuario.addTransaction(add)


//Exercicio 3

class Bank {
    private accounts: UserAccount[];
  
    public getNames(): string[] {
        return this.accounts.map((user) => {
            return user.getName()
        })
    }

    
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
  }
 
  console.log(usuario.getUser())