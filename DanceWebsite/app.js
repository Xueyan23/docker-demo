const express = require("express");
const path = require("path");
const app = express();
const port = 3003;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));//documentation mein public folder ke name se use hota hai
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));// Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {};
    res.status(200).render('index.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});