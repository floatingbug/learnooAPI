const signInTestUser = require("./utils/signInTestUser");
const jwt = require("jsonwebtoken");
const userModel = require("@models/user");


async function signIn({credentials}){
	
	//sign in test user
	if(credentials.nameOrEmail === "tom" || credentials.nameOrEmail === "dacristina" || credentials.nameOrEmail === "pavel"){
		try{
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
					...user,
					token,
				},
			};
		}
		catch(error){
			throw error;
		}
	}

	try{
		// get user
		const query = {
			$or: [
				{
					name: credentials.nameOrEmail,
					password: credentials.password,
				},
				{
					email: credentials.nameOrEmail,
					password: credentials.password,
				}
			],
		};

		const user = await userModel.getUser({query});

		// create token
		user.token = await new Promise((resolve, reject) => {
			jwt.sign(user, process.env.JWT_SECRET, (error, token) => {
				if(error) reject(error);
				else resolve(token);
			});
		});

		const {password, _id, ...filteredUser} = user;

		return {
			success: true,
			code: 200,
			message: "Sent token.",
			data: {
				...filteredUser,
			}
		};
	}
	catch(error){
		throw error;
	}
}


module.exports = signIn;
