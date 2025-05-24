const jwt = require("jsonwebtoken");


async function getUser({token}){
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
			if(error){
				reject(error);
			}
			else{
				resolve({
					success: true,
					code: 200,
					message: "Sent user.",
					data: decoded,
				});
			}
		});
	});
}


module.exports = getUser;
