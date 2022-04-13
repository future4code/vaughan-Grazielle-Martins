import axios from 'axios'
import { Address } from '../types'

//exercicio 2

const baseUrl = "https://viacep.com.br/ws"


export const getAddress = async (cep: string): Promise<Address | null> => {
  
    try {
        const response = await axios.get(`${baseUrl}/${cep}/json/`)
        const address: Address = {
            state: response.data.uf,
            city: response.data.localidade,
            district: response.data.bairro,
            street: response.data.logradouro,
       
        }
       
        return address
    } catch (error) {
        console.error("Erro no serviço getAddressInfo: ", error)
        return null
    }
}