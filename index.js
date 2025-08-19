
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
//update
app.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  const post = posts[id];   // posts should be an array
  if (!post) {
    return res.status(404).send("Post not found");
  }
  res.render("edit.ejs", { post: post, id: id });
});

//Handle updeted post
app.post("/update/:id", (req, res) => {
  const id = req.params.id;
  posts[id] = {
    title: req.body.title,
    content: req.body.content
  };
  res.redirect("/");
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