const express = require("express");
const path = require("path");   

let app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const PORT = process.env.PORT || 3030;

app.get("/aboutus", (req, res) => {
    res.render("aboutus.ejs");
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/team",(req,res)=>{
    res.render("team.ejs");
})

app.get("/contactus",(req,res)=>{
    res.render("contactus.ejs");
})

app.get("/gallery",(req,res)=>{
    res.render("gallery.ejs");
})

app.post("/send-message",(req,res)=>{
    
    res.redirect("/");
})

app.get("/blogs",(req,res)=>{
    res.render("blogs.ejs");
})
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
