import { User } from "../type/User"

export function compras(user: User, valor: number): User | undefined {
	if(user.saldo >= valor) {
		return {
			...user,
			saldo: user.saldo - valor		
		}
	}
	return undefined
}