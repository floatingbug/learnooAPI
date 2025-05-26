function response({res, success, code, message, data = {}, errors}){
	if(success){
		res.status(code).json({
			success,
			message,
			data,
		});
	}
	else{
		res.status(code).json({
			success,
			errors,
		});
	}
}


module.exports = response;
