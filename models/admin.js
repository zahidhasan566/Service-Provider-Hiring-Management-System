var db = require('./db');

module.exports={

	getById: function(id, callback){
console.log(id);

	console.log(id);
			var sql = "select user.userid, user.username , user.email, user.phone, user.gender, user.city, serviceprovider.skill FROM user join serviceprovider on user.userid='"+id+"'  and serviceprovider.userid='"+id+"' " ; 
			db.getResults(sql, function(result){
				
				if( result.length > 0 ){
					
					callback(result);
	
				}else{
					callback([]);
				}
			});
		},
	
		getupdate: function(id, callback){
			console.log(id);
			
				console.log(id);
						var sql = "select * from user where userid='"+id+"' " ; 
						db.getResults(sql, function(result){
							
							if( result.length > 0 ){
								
								callback(result);
				
							}else{
								callback([]);
							}
						});
					},
				
	getproupdate: function(id, callback){
							console.log(id);
							
								console.log(id);
										var sql = "select * from serviceprovider where userid='"+id+"' " ; 
										db.getResults(sql, function(result){
											
											if( result.length > 0 ){
												
												callback(result);
								
											}else{
												callback([]);
											}
										});
									},
							
	
	
	getprovider : function(callback){
		var sql = "select * from user where type= 1";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	getprofile : function(callback){
		var sql = "select * from user where type= 4";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	


	warning : function(user, callback){
	    var sql = "insert into notice values('','" + user.userid + "','" +user.id + "','" + user.warning + "')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	message : function(user, callback){
	    var sql = "insert into message values('','" + user.userid + "','" +user.id + "','" + user.message + "')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update : function(user, callback){
		
		var sql = "update user set username='" + user.username + "', email='" + user.email + "', phone='" + user.phone + "', password='" + user.password + "', gender='" + user.gender + "', city='" + user.city + "' where userid=" + user.id;

		 db.execute(sql, function (status) {
			callback(status);
		});
	},

	proupdate : function(user, callback){
		console.log(user.skill);
		var sql = "update serviceprovider set skill='" + user.skill + "' where userid=" + user.id;

		 db.execute(sql, function (status) {
			 console.log(status);
			callback(status);
		});
	},
	disable : function(id, callback){
	    var sql = "delete from user where userid="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	},

	getcustomer : function(callback){
		var sql = "select * from user where type= 2";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},


	getByIdcus: function(id, callback){
		console.log(id);
		
			console.log(id);
					var sql = "select user.userid, user.username , user.email, user.phone, user.gender, user.city, customer.location FROM user join customer on user.userid='"+id+"'  and customer.userid='"+id+"' " ; 
					db.getResults(sql, function(result){
						
						if( result.length > 0 ){
							
							callback(result);
			
						}else{
							callback([]);
						}
					});
				},


				getfeed : function(callback){
					var sql = "select * from feedback";
			
					db.getResults(sql, function(results){
						
						if(results.length > 0 ) {
							callback(results);
						}else{
							callback([]);
						}
					});
				},

				getmessage : function(callback){
					var sql = "select * from message";
			
					db.getResults(sql, function(results){
						
						if(results.length > 0 ) {
							callback(results);
						}else{
							callback([]);
						}
					});
				},

				gethistory : function(callback){
					var sql = "select user.userid, user.username, appointment.location ,appointment.time , appointment.pay, service.servicename FROM user join appointment on user.userid=appointment.cid join service on service.serviceid=appointment.serviceid ";
			
					db.getResults(sql, function(results){
						
						if(results.length > 0 ) {
							callback(results);
						}else{
							callback([]);
						}
					});
				},
				
				gettrans : function(callback){
var sql = "select user.username,account.cid, account.totalamount, account.provideramount, account.comamount ,service.servicename FROM user join account on user.userid=account.cid join service on service.serviceid=account.serviceid ";
					;
			
					db.getResults(sql, function(results){
						
						if(results.length > 0 ) {
							callback(results);
						}else{
							callback([]);
						}
					});
				},

				searchpro: function(user, callback){
					console.log(user.ename);
			
					var sql = "select * from user where username like '%" +user.ename+"%' and type=1";
					db.getResults(sql, function(result){
			
						if(result.length > 0 ){
							callback(result);
						}else{
							callback([]);
						}
					});
				},

				searchcus: function(user, callback){
					console.log(user.ename);
			
					var sql = "select * from user where username like '%" +user.ename+"%' and type=2";
					db.getResults(sql, function(result){
			
						if(result.length > 0 ){
							callback(result);
						}else{
							callback([]);
						}
					});
				},



}


