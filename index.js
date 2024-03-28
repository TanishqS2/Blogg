import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/postpage",(req,res)=>{
    res.render("postPage.ejs");
});

app.get("/tech",(req,res)=>{
    res.render("tech.ejs");
});

app.get("/news",(req,res)=>{
    res.render("news.ejs");
});

app.get("/coding",(req,res)=>{
    res.render("coding.ejs");
});

app.get("/general",(req,res)=>{
    res.render("general.ejs");
});



app.post("/submit",(req,res)=>{
    const email = req.body.Email;
    const post = req.body.Post;

    res.render("postPage.ejs",{
        Email: email,
        Post: post,
    })
});

app.listen(port,()=>{
    console.log(`server is running on ${port}.`);
});