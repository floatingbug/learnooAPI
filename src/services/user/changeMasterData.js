const userModel = require("@models/user");
const jwt = require("jsonwebtoken");


async function changeMasterData({userId, changes}){
	// if name or email has to change check if they already exists

	// change data on db
	try{
		const filter = {userId};
		const update = {
			$set: {
				...changes,
			},
		};

		const result = await userModel.changeMasterData({filter, update});

	}
	catch(error){
		throw error;
	}

	// get user
	let user = null;

	try{
		const query = {userId};

		user = await userModel.getUser({query})
	}
	catch(error){
		throw error;
	}

	// change jwt
	try{
		const token = await new Promise((resolve, reject) => {
			jwt.sign(user, process.env.JWT_SECRET, (error, token) => {
				if(error) reject(error);
				else resolve(token);
			});
		});
		
		return {
			success: true,
			code: 200,
			message: "Changed Master Data",
			data: token,
		};
	}
	catch(error){
		throw error;
	}
}

		


module.exports = changeMasterData;
