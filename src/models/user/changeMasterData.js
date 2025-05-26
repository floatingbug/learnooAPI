const {getDB} = require("@config/db");


async function changeMasterData({filter, update}){
	try{
		const db = await getDB();
		const result = await db.collection("users").updateOne(filter, update);

		return result;
	}
	catch(error){
		throw error;
	}
}


module.exports = changeMasterData;
