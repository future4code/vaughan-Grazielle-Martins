import { compras, verificacao } from "../src"
import { User } from "../type/User"
import { Casino, LOCATION, NACIONALITY, Usuario } from "../type/UsereCassino"

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

test("Testando usuario brasileiro que pode entrar no estabelecimento  no Brasil", () => {
	const user: Usuario = {
		name: "Grazielle",
		age: 20,
		nacionality: NACIONALITY.BRAZILIAN
	}

	const casino : Casino = {
		name: "Casino Brasileiro",
		location: LOCATION.BRAZIL
	}

	const result = verificacao(casino, [user])
	
	expect(result.brazilians.podeentrar).toEqual(["Grazielle"])
	
})
test("Testando usuario americano que pode entrar no estabelecimento  no Brasil", () => {
	const user: Usuario = {
		name: "Arthur",
		age: 19,
		nacionality: NACIONALITY.AMERICAN
	}

	const casino : Casino = {
		name: "Casino Brasileiro",
		location: LOCATION.BRAZIL
	}

	const result = verificacao(casino, [user])
	
	expect(result.americans.podeentrar).toEqual(["Arthur"])
	
})
test("Testando dois usuarios americanos e dois brasileiros, com 19 anos, no estabelecimento americano", () => {
	const user1: Usuario = {
		name: "Arthur",
		age: 19,
		nacionality: NACIONALITY.AMERICAN
	}
	const user2: Usuario = {
		name: "Levi",
		age: 19,
		nacionality: NACIONALITY.AMERICAN
	}
	const user3: Usuario = {
		name: "Grazielle",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN
	}
	const user4: Usuario = {
		name: "Junior",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN
	}
	const casino : Casino = {
		name: "Casino Americano",
		location: LOCATION.EUA
	}

	const result = verificacao(casino, [user1, user2, user3, user4])
	
	expect(result.americans.naopodeentra).toEqual(["Arthur", "Levi"])
	expect(result.brazilians.naopodeentra).toEqual(["Grazielle", "Junior"])
	
})

test("Testando dois usuarios americanos com 21 anos e dois brasileiros com 19 anos, no estabelecimento americano", () => {
	const user1: Usuario = {
		name: "Arthur",
		age: 21,
		nacionality: NACIONALITY.AMERICAN
	}
	const user2: Usuario = {
		name: "Levi",
		age: 21,
		nacionality: NACIONALITY.AMERICAN
	}
	const user3: Usuario = {
		name: "Grazielle",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN
	}
	const user4: Usuario = {
		name: "Junior",
		age: 19,
		nacionality: NACIONALITY.BRAZILIAN
	}
	const casino : Casino = {
		name: "Casino Americano",
		location: LOCATION.EUA
	}

	const result = verificacao(casino, [user1, user2, user3, user4])
	
	expect(result.americans.podeentrar).toEqual(["Arthur", "Levi"])
	expect(result.brazilians.naopodeentra).toEqual(["Grazielle", "Junior"])
	
})