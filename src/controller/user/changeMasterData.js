const userService = require("@services/user");
const response = require("@utils/response");


async function changeMasterData(req, res, next){
	try{
		const changes = req.body;
		const userId = req.user.userId;

		const result = await userService.changeMasterData({userId, changes});

		response({res, ...result});
	}
	catch(error){
		next(error);
	}
}


module.exports = changeMasterData;
