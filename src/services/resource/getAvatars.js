const resourceModel = require("@models/resource");


async function getAvatars(){
	try{
		const result = await resourceModel.getAvatars();

		return {
			success: true,
			code: 200,
			message: "Sent avatars.",
			data: result.avatars,
		};
	}
	catch(error){
		throw error;
	}
}


module.exports = getAvatars;
