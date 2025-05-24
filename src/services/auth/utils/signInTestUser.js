const authModel = require("@models/auth");


async function signInTestUser({credentials}){
	try{
		const query = {
			"$or": [
				{
					name: credentials.nameOrEmail,
					password: credentials.password,
				},
				{
					email: credentials.nameOrEmail,
					password: credentials.password,
				},
			],
		}

		const result = await authModel.signIn({query});


		return result;
	}
	catch(error){
		throw error;
	}
}


module.exports = signInTestUser;
