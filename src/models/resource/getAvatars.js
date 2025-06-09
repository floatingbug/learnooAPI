const {getDB} = require("@config/db");


async function getAvatars(){
	try{
		const db = await getDB();
		const result = await db.collection("avatars").findOne();

		return result;
	}
	catch(error){
		throw error;
	}
}


module.exports = getAvatars;
