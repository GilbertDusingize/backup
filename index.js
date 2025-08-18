
import express from "express";
import bodyParser from 'body-parser';
const app =express();
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];

//home
app.get("/", (req, res) => {
    res.render("home.ejs", { posts: posts});
});
//create
app.get("/create",(req,res)=>{
    res.render("create.ejs");
});
//about
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});
//contact
app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});
//coment
app.get("/coment",(req,res)=>{
    res.render("coment.ejs");
});


app.post("/create", (req, res) => {
    const {title,content}= req.body;
    //const postContent=req.body["content"];
    
    if(title && content){
        posts.push({title,content});
       res.redirect("/");
          }
         
        //  res.redirect("/");
          
});
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})