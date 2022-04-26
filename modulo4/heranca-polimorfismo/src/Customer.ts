import { User } from "./User";

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

const informações = new Customer("12", "user12@hotmmail.com", "user12", "123", "master")

console.log(informações.getId(), informações.getName(), informações.getEmail(), informações.getCreditCard(),informações.purchaseTotal, informações.introduceYourself())
