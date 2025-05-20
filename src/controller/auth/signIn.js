const authService = require("@services/auth");
const response = require("@utils/response");


async function signIn(req, res, next){
	try{
		const credentials = {
			nameOrEmail: req.body.nameOrEmail,
			password: req.body.password,
		}

		const result = await authService.signIn({credentials});

		response({res, ...result});
	}
	catch(error){
		next(error);
	}
}


module.exports = signIn;
