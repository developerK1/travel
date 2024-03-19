const router = require('express').Router();
const db = require ("../config/db/db.config");


//GET ALL ADS
router.route('/').get((req, res) => {
   
    db.query("SELECT * FROM `drivers`",async  (err, results)=>{
   
            
        let data = await JSON.stringify(results);
        data = await JSON.parse(data);

        
        if(!err){
            console.log(data)
            res.render("home", {title:"index", drivers : data})
        }else {
            console.log("data coudnt be fetch at this moment");
        }			
        
    });
        
});


//GET ALL SINGLE RECORD
router.route('/details/:id').get((req, res) => {
   

    const sql = `SELECT * FROM drivers WHERE id = '${req.params.id}'`;

    db.query(sql, (err, results)=>{


        if(!err){

             res.render("details", {title:"Details" , driver : results})
        }else {
            console.log("data coudnt be fetch at this moment");
        }			
        
        
    });
        

});




//GET ALL SINGLE RECORD
router.route('/test/:id').get((req, res) => {
   

    const sql = `SELECT * FROM drivers WHERE id = '${req.params.id}'`;

    db.query(sql, (err, results)=>{

        let driver = JSON.stringify(results)

        if(!err){
            console.log(results)
             res.send(results[0].name)
        }else {
            console.log("data coudnt be fetch at this moment");
        }			
        
        
    });
        

});







// app.post('/createlist', (req, res)=>{
    
//     const content = req.body.name;
//     let sql = `INSERT INTO list (name) VALUES ('${content}')`;

//     db.query(sql, (err, results)=>{
			
// 		if(!err){
// 			res.render("createlist" ,{results : `Data is inserted which is ${content}`});
// 		}else {
//             res.render(`Data inserte failed...`);
//         }	
		
//         console.log(sql)
        
// 	});  
    
// })

/*
app.get('/about', (req, res)=>{
	res.render("about" ,{title:"about"});
})






app.get('/delete/:id', (req, res)=>{
    
    const currentID = req.params.id;
    let sql = `DELETE FROM list WHERE id = '${currentID}'`;

    db.query(sql, (err, results)=>{
			
		if(!err){
			res.send(`Deleted from dB, id ${currentID}...<a href="/">HOME</a>`);
		}else {
            res.send(`Deleting failed..<a href="/">HOME</a>`);
        }	
		
	});  
    
})



app.post("/editelist/:id", (req, res)=>{
    const currentID = req.params.id;
    const content = req.body.name;
    
    console.log(currentID,content)
    
    let sql = `UPDATE list SET name='${content}' WHERE id = '${currentID}'`;
    
    db.query(sql, (err, results)=>{
			
		if(!err){
			res.send(`updated from dB, id ${currentID}...<a href="/">HOME</a>`);
		}else {
            res.send(`Patching failed..<a href="/">HOME</a>`);
        }	
		
	});  
    
    
    console.log(sql)
})


app.get('/list', (req, res)=>{
	db.query("SELECT * FROM `list`", (err, results)=>{
		console.log(results)
		
		if(!err){
			res.send(`here are your results ,${JSON.stringify(results)}`);
		}	
		
	});
})

app.get('/list/:id', (req, res)=>{
    const currentID = req.params.id;
    
    let sql = `SELECT name FROM list WHERE id = '${currentID}'`;
    
	db.query(sql, (err, results)=>{
		err ? console.log("somtheing went wron") : res.send(`here are your results ,${JSON.stringify(results)}`);
	})
	
	console.log(sql)
})



*/

module.exports = router;
