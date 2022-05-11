import UserBusiness from "../src/business/UserBusiness"
import { HashGeneratorMock } from "./mocks/hashGeneratorMock"
import { IdGeneratorMock } from "./mocks/idGeneratorMock"
import { TokenGeneratorMock } from "./mocks/tokenGeneratorMock"
import { UserDatabaseMock } from "./mocks/userDatabaseMock"

const userBusinessMock = new UserBusiness(
    new UserDatabaseMock() as any,
    new IdGeneratorMock(),
    new TokenGeneratorMock(),
    new HashGeneratorMock()
)

describe("Testando usuário não existente", () => {
	
   test("usuário não existente", async () => {
    expect.assertions(2)

    try {
      await userBusinessMock.getIDBusiness("654")
    } catch (error: any) {
      expect(error.statusCode).toBe(401)
      expect(error.message).toBe("Usuário inválido")
    }
  })
  test("usuário existente", async () => {
    expect.assertions
    
    try {
      const getUserById = jest.fn(
        (id: string) => userBusinessMock.getIDBusiness(id)
      )
        
      const result = await getUserById("id_mockado")

      expect(getUserById).toHaveBeenCalledWith("id_mockado")
      expect(result).toEqual({
        id: "id_mockado",
        name: "astrodev",
        email: "astrodev@gmail.com",
        role: "ADMIN",
      })
    } catch (error: any) {
      console.log(error.message)
    }
  })
})