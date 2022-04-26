import { Client } from "./Client";
import { Commerce } from "./Commerce";


export class CommercialClient extends Commerce implements Client {

    constructor(
        private cnpj: string,
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);

    }

    public getCnpj(): string {
        return this.cnpj
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
      }
}
const imprimir = new CommercialClient("13534534", "User5", 2, 207, 1, "1234")

  console.log({cpf: imprimir.getCnpj(), calculate: imprimir.calculateBill()})

