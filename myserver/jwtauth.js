var jwt = require('jsonwebtoken');
let token = function (secure_key) {
	secure_key = secure_key || 'hustchenshu'
	return {
		createToken: function (obj, timeout){
			var token = jwt.sign(obj,secure_key, {
		        'expiresIn': timeout // 设置过期时间
		    });
		    return token;
		},
		checkToken: function (obj,token) {
			var success = true 
			try {
				let decode = jwt.verify(token, secure_key);
				console.log('decode:');
				console.log(decode);
				console.log('obj:');
				console.log(obj);
				for(p in obj){
					if(obj[p] !== decode[p]){
						success = false
					}
				}
			} catch(e) {
				console.log(e);
				success = false
			} finally {
				console.log(success);
				return success
			}
		}
	}	
}
module.exports = token