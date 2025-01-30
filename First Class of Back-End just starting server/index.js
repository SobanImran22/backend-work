const express = require('express');
const app = express();
const port = 3002;



app.get("/about", (req,res) =>{
    res.send("This is the about page");
    console.log ("About page accessed");
})

app.get("/contact", (req,res) =>{
    res.send("This is the contact page");
    console.log ("contact page accessed");
})


app.get("/", (req,res) =>{
    res.send("This is the home page");
    console.log ("Home page accessed");
})


app.listen(port, ()=>{
    console.log(`App is running on port  ${port}`)
})