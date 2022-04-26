import { Client } from "./Client";
import { Residence } from "./Residence";


export class ResidentialClient extends Residence implements Client {

    constructor(
        private cpf: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);

    }

    public getCpf(): string {
        return this.cpf
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
      }
}
const imprimir = new ResidentialClient("111.111.111-11", "User4", 1, 200, 1, "1234")

  console.log({cpf: imprimir.getCpf(), calculate: imprimir.calculateBill()})

