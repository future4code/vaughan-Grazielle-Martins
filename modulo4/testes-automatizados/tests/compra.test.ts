import { compras } from "../src"
import { User } from "../type/User"

test("Testando com o saldo maior que o valor de compra", () => {
	const user: User = {
		nome: "Grazielle",
		saldo: 200
	}

	const result = compras(user, 80)
	
	expect(result).toEqual({
		nome: "Grazielle",
		saldo: 120
	})
})

test("Testando com o saldo igual ao valor de compra", () => {
	const user: User = {
		nome: "Grazielle",
		saldo: 200
	}

	const result = compras(user, 200)
	
	expect(result).toEqual({
		nome: "Grazielle",
		saldo: 0
	})
})

test("Testando com o saldo menor ao valor de compra", () => {
	const user: User = {
		nome: "Grazielle",
		saldo: 20
	}

	const result = compras(user, 200)
	
	expect(result).not.toBeDefined()
	
})