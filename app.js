const express=require("express")
const app=express();
const home_route=require("./router/home_router")
const contactrouter=require("./router/contact_router")
const servicerouter=require("./router/service_router")
const skillrouter=require("./router/skill_router")
const path=require("path")
const hbs = require("hbs")
app.use(express.static(path.join(__dirname,"public")))


// set template engine
app.set("view engine","hbs")

hbs.registerPartials(path.join(__dirname,"./views/partials"))

app.use("/",home_route)
app.use("/contact",contactrouter)
app.use("/service",servicerouter)
app.use("/skill",skillrouter)
app.listen(8080,()=>{
    console.log("server is listening port no 8080")
})