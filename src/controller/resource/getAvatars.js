const response = require("@utils/response");
const resourceService = require("@services/resource");


async function getAvatars(req, res, next){
	try{
		const result = await resourceService.getAvatars();

		response({res, ...result});
	}
	catch(error){
		throw error;
	}
}


module.exports = getAvatars;
