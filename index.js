import express from "express";
import serverRoutes from "./routes/server.js"



import path, { resolve } from "path";

import { requestTime, logger} from "./middlewares.js";



const __dirname = path.resolve();

const PORT = process.env.PORT??4000;



const app = express();

//console.log(app.get("view engine"));

app.set("view engine", "ejs");

app.set("views", path.resolve(__dirname, "ejs"))

console.log(app.get("views"));

app.use(express.static(path.resolve(__dirname, "static")));

app.get("/", (req, res)=>{
    res.render("index", {title:"Main Main", active: "main"})
})

app.get("/features", (req, res)=>{
    res.render("features", {title:"FEATURES FEATURES", active: "features"})
})

app.use(requestTime);

app.use(logger);

app.use(serverRoutes)


app.get("/download", (req, res)=>{
    // res.send("<h1>Hello Express! AYA</h1>")
    res.download(path.resolve(__dirname,"static", "index.html"));
    console.log(req.requestTime)
})

app.listen(PORT, ()=>{
    console.log(`server start on port ${PORT}...`);
});