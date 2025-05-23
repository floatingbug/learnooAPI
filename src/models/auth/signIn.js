const {getDB} = require("@config/db");


async function signIn({query}){
	try{
		const db = await getDB();
		const result = await db.collection("users").findOne(query);

		return result;
	}
	catch(error){
		throw error;
	}
}


module.exports = signIn;
