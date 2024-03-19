const mysql = require('mysql');

 const db = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "nodemyslq"
})

db.connect((err)=>{
	if(err){
       console.log(err); 
    }else{ 
	   console.log("connection established..");
    }
});


module.exports = db;

