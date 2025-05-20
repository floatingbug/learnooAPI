function signInTestUser({credentials}){
	let user = null;

	if(credentials.password === "tom"){
		user = {
			name: "tom",
			token: "1",
		};
	}
	else if(credentials.password === "dacristina"){
		user = {
			name: "dacristina",
			token: "2",
		}
	}
	else if(credentials.password === "pavel"){
		user = {
			name: "pavel",
			token: "3",
		}
	}
	else {
		return false;
	}

	return user;
}


module.exports = signInTestUser;
