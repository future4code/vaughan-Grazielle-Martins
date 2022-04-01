import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Extrato, users, Users} from "./data";


const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

app.post("/user", (req, res)=>{
    let errorCode = 422
    try {
        
       const { name, cpf, datadenascimento, saldo, transacoes} = req.body
 
       const adduser: Users = {
          
          name,
          cpf,
          datadenascimento: new Date(datadenascimento),
          saldo: 0,
          transacoes
       }
       
       let novadata: number = new Date().getFullYear()
       let idade = novadata - adduser.datadenascimento.getFullYear()
       
       if (idade < 18) {
        errorCode = 404;
        throw new Error("Precisar ter no mínimo 18 anos ");
      }
      const cpfcadastrado = users.find((cpfuser)=>{
          return cpfuser.cpf === cpf
      })
      console.log(cpfcadastrado)
       if (cpfcadastrado) {
        errorCode = 404;
        throw new Error("CPF já cadastrado");
      }
       users.push(adduser)
       res.status(200).send(users)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
   
    })

    app.get("/users", (req, res) => {
        res.status(200).send(users)
    })

    app.get("/user/balance", (req, res) => {
        let errorCode: number = 422
        try {
            const nomeuser = req.query.name 
            const cpfuser = req.query.cpf
           
    
            const filtro = users.filter((user)=>{
                return user.name === nomeuser
            })
            
            const serachname = users.find((name) => {
                return name.name === nomeuser
            }
            )
            const serchcpf = users.find((cpf) => {
                return cpf.cpf === cpfuser
            }
            )
            if (!serachname || !serchcpf) {
                errorCode = 422;
                throw new Error("Name ou CPF inválido!");
              }
            res.status(200).send({saldo: filtro[0].saldo})
        } catch (error: any) {
            res.status(errorCode).send({ message: error.message })
        }
   

    })

    app.put("/user", (req, res) => {
        const nameuser = req.query.name
        const cpfuser = req.query.cpf
       
        const find = users.find((user)=>{
           return user.name === nameuser 
            
        })
        const { valor, data, descricao} = req.body
 
        const addvalue: Extrato = {
           
          valor,
          data,
          descricao
        }
        
        find?.transacoes.push(addvalue)

        res.status(200).send(find)
    })
