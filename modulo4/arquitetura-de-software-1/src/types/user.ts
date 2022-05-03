export enum USER_ROLES{
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export type AuthenticationData = {
    id: string ,
    role: USER_ROLES
}

export type user = {
    id: string,
    email: string,
    name: string,
    password: string,
    role: USER_ROLES 
}