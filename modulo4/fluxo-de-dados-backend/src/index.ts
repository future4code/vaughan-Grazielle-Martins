import express from "express";
import { products } from "./data"
import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

app.get("/test", (req, res) => {
    res.send("A API está funcionando")
})

app.post("/newproduct", (req, res) => {
    try {
        const idnew = String(Date.now())
        if (!idnew) {
            throw new Error("Id já cadastrado!")
        }

        const newProduct = {
            id: idnew,
            name: req.body.name,
            price: req.body.price
        }

        if (!newProduct.name || !newProduct.price) {
            throw new Error("Name ou Price está vazio")
        }
        if (typeof newProduct.name !== "string") {
            throw new Error("Name é diferente de string")
        }
        if (typeof newProduct.price !== "number") {
            throw new Error("Price é diferente de number")
        }
        if (newProduct.price < 0) {
            throw new Error("Price é menor que 0")
        }
        products.push(newProduct)

        res.send(products)
    } catch (e: any) {
        switch (e.message) {
            case "Name ou Price está vazio":
                res.status(422).send(e.message)
                break
            case "Name é diferente de string":
                res.status(422).send(e.message)
                break
            case "Price é diferente de number":
                res.status(422).send(e.message)
                break
            case "Price é menor que 0":
                res.status(422).send(e.message)
                break
            case "Id já cadastrado!":
                res.status(409).send(e.message)
                break
            default:
                res.status(500).send(e.message)
                break
        }

    }
})

app.get("/allproducts", (req, res) => {
    res.send(products)
})

app.put("/editprice/:id", (req, res) => {
    try {
        const id = req.params.id
        
        const body = req.body.price
        
        if (!body) {
            throw new Error("Price está vazio")
        }
        if (typeof body !== "number") {
            throw new Error("Price é diferente de number")
        }
        if (body <= 0) {
            throw new Error("Price é igual ou menor que 0")
        }
        const editprice = products.filter((price) => {
            return price.id === id
        })[0]

        if (!editprice) {
            throw new Error("Id não encontrado!")
        }
        editprice.price = body

        res.send(editprice)

    } catch (e: any) {
        switch (e.message) {
            case "Price está vazio":
                res.status(422).send(e.message)
                break
            case "Price é diferente de number":
                res.status(422).send(e.message)
                break
            case "Price é igual ou menor que 0":
                res.status(422).send(e.message)
                break
            case "Id não encontrado!":
                res.status(409).send(e.message)
                break
            default:
                res.status(500).send(e.message)
                break
        }

    }
})

app.delete("/delete/:id", (req, res) => {
    try{
        const id = req.params.id

        const deleteProduct = products.filter((product) => {
            return product.id === id
        })[0]
        if (!deleteProduct) {
            throw new Error("Produto não encontrado!")
        }
        const indice = products.indexOf(deleteProduct)
        const splice = products.splice(indice, 1)
    
        res.send(products)
    }catch(e: any){
        switch (e.message) {
            case "Id não encontrado!":
                res.status(409).send(e.message)
                break
            default:
                res.status(500).send(e.message)
                break
        }
    }
  
})