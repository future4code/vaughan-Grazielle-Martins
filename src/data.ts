//O exercicio 2, 3, 5, 6  ficaram nesse arquivo separado

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
  }

export const users: User[] = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org"
    },
    {
      "id": 2,
      "name": "Grazielle Martins",
      "email": "Grazielle@april.biz",
      "phone": "2-770-736-8032 x56442",
      "website": "grazielle.org"
    },
    {
      "id": 3,
      "name": "Arthur Emanuel",
      "email": "Arthur@april.biz",
      "phone": "3-770-736-8033 x56442",
      "website": "arthur.org"
    },
    {
      "id": 4,
      "name": "Levi Martins",
      "email": "Levi@april.biz",
      "phone": "4-770-736-8034 x56442",
      "website": "levi.org"
    },
    {
      "id": 5,
      "name": "Paulo Junio",
      "email": "Paulo@april.biz",
      "phone": "5-770-736-8035 x56442",
      "website": "paulo.org"
    },
]

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
  }

  //Você acha melhor criá-los dentro ou fora do array de usuários? 
  //Acho melhor fora, pq consigo passar o type com as propriedades dos posts e a requisição
  //consigo de uma forma mais prática

  
  export const posts: Post[] = [
    {
      "id": 1,
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
      "userId": 1
    },
    {
      "id": 2,
      "title": "dolorem dolore est ipsam",
      "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
      "userId": 1
    },
    {
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      "userId": 1
    },
    {
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      "userId": 1
    },
    {
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      "userId": 1
    },
]