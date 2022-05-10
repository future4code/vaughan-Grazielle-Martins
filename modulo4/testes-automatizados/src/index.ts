import { User } from "../type/User"
import { Casino, LOCATION, NACIONALITY, Result, Usuario } from "../type/UsereCassino";

export function compras(user: User, valor: number): User | undefined {
	if(user.saldo >= valor) {
		return {
			...user,
			saldo: user.saldo - valor		
		}
	}
	return undefined
}

export function verificacao(casino: Casino, users: Usuario[]): Result {
    const podeentrar: Usuario[] = [];
    const naopodeentra: Usuario[] = [];
  
    for (const user of users) {
      if (casino.location === LOCATION.EUA) {
        if (user.age >= 21) {
          podeentrar.push(user);
        } else {
          naopodeentra.push(user);
        }
      } else if (casino.location === LOCATION.BRAZIL) {
        if (user.age >= 18) {
          podeentrar.push(user);
        } else {
          naopodeentra.push(user);
        }
        break;
      }
    }
  
    return {
      brazilians: {
        podeentrar: podeentrar
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
        naopodeentra: naopodeentra
          .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
          .map((u) => u.name),
      },
      americans: {
        podeentrar: podeentrar
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
        naopodeentra: naopodeentra
          .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
          .map((u) => u.name),
      },
    };
  }