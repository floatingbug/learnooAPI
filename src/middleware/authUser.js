const jwt = require("jsonwebtoken");
const response = require("@utils/response");


async function authUser(req, res, next){
	const token = req.headers["authorization"];

	if(!token || token === ""){
		console.log("test");
		return response({
			res,
			success: false,
			code: 401,
			errors: ["No token provided."],
		});
	}

	try{
		const user = await new Promise((resolve, reject) => {
			jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
				if(error) reject(error);
				else resolve(decoded);
			});
		});

		req.user = user;
		next();
	}
	catch(error){
		return response({
			res,
			success: false,
			code: 401,
			errors: ["Invalid or expired token."],
		});
	}
}


module.exports = authUser;
