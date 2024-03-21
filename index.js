const express = require('express');

const app = express();
const bodyParser = require('body-parser');

//Modules
const db = require ("./config/db/db.config");
const driversRoutes =  require ("./routes/driver.routes");
const authsRoutes =  require ("./routes/auths.routes");
// const data = require("./dev helpers/data");
 const localData = require("./dev helpers/localdata");

port =  process.env.PORT || 6060;
app.set('view engine', 'ejs');
app.set("static", 'public');
app.use(bodyParser.json())
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'))



app.use("/drivers", driversRoutes);
app.use("/auth", authsRoutes);


app.get("/", (req,res)=> {
    res.render("home", {title:"index", drivers : localData})
})











app.listen(port, ()=>{

    console.log(`Server running on ${port} press Ctl-C to terminate`)

})