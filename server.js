
const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');
const app=express();
//const dbURI = 'your MongoDB atlast code'
mongoose.connect(dbURI,{ useNewUrlParser: true,useUnifiedTopology:true})
.then((result)=>{
    app.listen(3000);
})
.catch((err)=>{
    console.log(err)
})

app.set('view engine','ejs');
// app.set('views', 'myviews');

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.redirect('/blogs');
   
});
app.get('/about',(req,res)=>{
    res.render('about',{title:'About'});
    //res.sendFile('./views/about.html',{root:__dirname});
    //res.send('<h1>Hello World</h1>')
});

 
//redirect
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});
// blog routes
app.use('/blogs', blogRoutes);
app.use((req,res)=>{
    res.status(404).render('404', { title: '404' });
})
