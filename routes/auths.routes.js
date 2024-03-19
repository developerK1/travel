const router = require('express').Router();
const db = require ("../config/db/db.config");
url = "http://localhost/letsgo/dash/auth";


// //CREATE ACCOUNT
router.route("/create-acount/").get((req, res) => {
    res.redirect(`${url}/create-account/`)
});


router.route('/send-email-credentials').post((req, res) => {
    
    //GET DATA
    const account = {...req.body}

    //SEND TO EMAL FOR CONFIRM


    //SEND TO DB
    let insertSql = `INSERT INTO 'users'(username, name, email, passpin, question, answer, token) VALUES ('${req.body.username}','null','${req.body.email}','${req.body.password}','${req.body.question}','${req.body.answer}','${req.body.token}')`;


    db.query(insertSql, (err, results)=>{
   

        if(!err){
            // res.render("home", {title:"index", drivers : data})
            res.json("data inserted")
        }else {
            res.redirect("/auth/log-in")
        }			
        
    });


    //=======================CHANGE FT CHECK YOUR EMAILS========================
    // res.redirect("/auth/log-in")

    //username
    //name 
    //email
    //password
    //question
    //answer
    //Token
  })



//LOG IN ROUTE
router.route("/log-in/").get((req, res) => {
    res.redirect(`${url}/log-me-in/`)
});



//LOG IN ROUTE
router.route("/validate/").post((req, res) => {
    //GET THE INFORMATION
    //VALIDATE

    let user = {...req.body} ;

    //CHECK USER
    let fetchSql = `SELECT FROM user WHERE  username=${user.username} , email = ${user.email} , password =${user.password}`;

    db.query(fetchSql,async  (err, results)=>{
   
            
        let data = await JSON.stringify(results);
        data = await JSON.parse(data);

        
        if(!err){
            // res.render("home", {title:"index", drivers : data})
            res.json(data)
        }else {
            console.log("data coudnt be fetch at this moment");
        }			
        
    });

});


module.exports = router;



