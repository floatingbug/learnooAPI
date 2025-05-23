const {MongoClient} = require("mongodb");
let db = null;
const url = process.env.MONGO_URL;


const client = new MongoClient(url);


async function connectToDB(){
	try{
		await client.connect()
		db = client.db("learnoo");
		console.log("App connected to DB.");
	}
	catch(error){
		console.log("Fail to connect to db: ", error);
		process.exit(1);
	}
}

async function getDB(){
	if(!db){
		try{
			await client.connect();
			db = client.db("learnoo");
		}
		catch(error){
			console.log("Fail to connect to db: ", error);
			process.exit(1);
		}
	}

	return db;
}


module.exports = {connectToDB, getDB};
