enum ROLES {
    USER = "user",
    ADMIN = "admin",
}

type Usuarios = {
    nome: string,
    email: string,
    role: ROLES.ADMIN | ROLES.USER
}

const listaDeUsuarios: Usuarios[] = [
	{nome: "Rogério", email: "roger@email.com", role: ROLES.USER},
	{nome: "Ademir", email: "ademir@email.com", role: ROLES.ADMIN},
	{nome: "Aline", email: "aline@email.com", role: ROLES.USER},
	{nome: "Jéssica", email: "jessica@email.com", role: ROLES.USER},  
	{nome: "Adilson", email: "adilson@email.com", role: ROLES.USER},  
	{nome: "Carina", email: "carina@email.com", role: ROLES.ADMIN}      
] 

function emailsAdmin(usuarios: Usuarios[]) {
    return listaDeUsuarios.filter(
        (listaDeUsuarios: Usuarios)=>{
            return listaDeUsuarios.role === ROLES.ADMIN 
        }
    ).map((pessoa)=>{
        return pessoa.email
    })
}
console.log(emailsAdmin([]))