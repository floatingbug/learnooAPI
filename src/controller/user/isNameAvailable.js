const userService = require("@services/user");
const response = require("@utils/response");


async function isNameAvailable(req, res, next){
	const name = req.query.name;

	try{
		const result = await userService.isNameAvailable({name});

		response({res, ...result});
	}
	catch(error){
		next(error);
	}
}


module.exports = isNameAvailable;
