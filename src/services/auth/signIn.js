const signInTestUser = require("./utils/signInTestUser");


async function signIn({credentials}){
	
	//sign in test user
	if(credentials.nameOrEmail === "tom" || credentials.nameOrEmail === "dacristina" || credentials.nameOrEmail === "pavel"){
		const result = signInTestUser({
			credentials
		});

		if(!result){
			return {
				success: false,
				code: 400,
				errors: ["Wrong password."],
			};
		}

		return {
			success: true,
			code: 200,
			message: "Sign in success.",
			data: {
				name: result.name,
				token: result.token,
			},
		};
	}
}


module.exports = signIn;
