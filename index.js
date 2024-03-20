const express = require('express');

const app = express();
const bodyParser = require('body-parser');

//Modules
const db = require ("./config/db/db.config");
const driversRoutes =  require ("./routes/driver.routes");
const authsRoutes =  require ("./routes/auths.routes");
// const data = require("./dev helpers/data");

port =  process.env.PORT || 6060;
app.set('view engine', 'ejs');
app.set("static", 'public');
app.use(bodyParser.json())
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'))



app.use("/drivers", driversRoutes);
app.use("/auth", authsRoutes);


app.get("/", (req, res)=>{
    res.send("welcome to the app");
})

app.get("/drivers", (req,res)=> {
  db.query("SELECT * FROM `drivers`",async  (err, results)=>{
   
            
            let data = await JSON.stringify(results);
            data = await JSON.parse(data);

            
            if(!err){
                res.render("home", {title:"index", drivers : data})
            }else {
                console.log("data coudnt be fetch at this moment");
            }			
            
        });
})











app.listen(port, ()=>{

    console.log(`Server running on ${port} press Ctl-C to terminate`)

})