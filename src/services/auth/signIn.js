const signInTestUser = require("./utils/signInTestUser");
const jwt = require("jsonwebtoken");


async function signIn({credentials}){
	
	//sign in test user
	if(credentials.nameOrEmail === "tom" || credentials.nameOrEmail === "dacristina" || credentials.nameOrEmail === "pavel"){
		const result = await signInTestUser({
			credentials
		});

		if(!result){
			return {
				success: false,
				code: 400,
				errors: ["Wrong password."],
			};
		}

		const {password, ...user} = result;
		const token = jwt.sign(user, process.env.JWT_SECRET);

		return {
			success: true,
			code: 200,
			message: "Sign in success.",
			data: {
				name: result.name,
				token,
			},
		};
	}
}


module.exports = signIn;
