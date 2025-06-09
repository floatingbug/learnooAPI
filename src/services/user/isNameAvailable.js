const userModel = require("@models/user");


async function isNameAvailable({name}){
	try{
		const query = {
			name,
		};

		const result = await userModel.getUser({query});
		const nameIsAvailable = !result ? true : false;

		const message = nameIsAvailable ? "Name is available" : "Name is already in use.";

		return {
			success: true,
			code: 200,
			message,
			data: nameIsAvailable,
		};
	}
	catch(error){
		throw error;
	}
}


module.exports = isNameAvailable;
