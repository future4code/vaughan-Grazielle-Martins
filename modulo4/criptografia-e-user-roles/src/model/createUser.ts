import connection from "../data/connection";

const userTableName = "Users";

export const createUser = async (
	id: string,
	email: string,
	password: string,
	role: string) => {
	await connection
		.insert({
			id,
			email,
			password,
			role
		})
		.into(userTableName);
};