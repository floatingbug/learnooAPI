const response = require("@utils/response");
const userService = require("@services/user");


async function getUser(req, res, next){
	const token = req.headers["authorization"];

	try{
		const result = await userService.getUser({token});

		response({res, ...result});
	}
	catch(error){
		next(error);
	}
}


module.exports = getUser;
