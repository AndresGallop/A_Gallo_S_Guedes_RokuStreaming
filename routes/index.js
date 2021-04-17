const express = require('express');
const router = express.Router();

// this is where we would add our middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

router.use('/api', createProxyMiddleware({
    target: 'http://localhost:5000',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.use('/ums', createProxyMiddleware({
    target: 'http://localhost:5000',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.get('/', (req, res) => {
    //res.send('hit the main route');
    res.render('index', { message: "Hello from handlebars!" });
})

router.get('/portfolio', (req, res) => {
    //res.send('hit the main route');
    res.render('artwork', { portmessage: "You are on the portfolio page"});
})

router.get('/login', (req, res) => {
    //res.send('hit the main route');
    res.render('Login', {

        notmemberyet: "Not a member yet? Sign up to check our sweet retro catalogue",
        forgotpass: "Forgot your password?"

    });
})

router.get('/users', (req, res) => {
    //res.send('hit the main route');
    res.render('users', {

        chooseUserMessage: "Select your profile"

    });
})

router.get('/adminpage', (req, res) => {
    //res.send('hit the main route');
    res.render('Adminadult', {

        welcomemessage: "Welcome back User",
        Admintitle: "These are the movie selection for your Admin account"

    });
})



router.use((req, res) => {
    res.status(404);
    // res.send("Page doesn't exist");

    res.render('error', {

        layout: "errorLayout.hbs",
        errormessage: `you've lost your way a wee bit! "${req.url}" doesn't exist`
    })
})

module.exports = router;
