const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(path.join(__dirname, '/views/templates'));
hbs.partials = hbs.templates; // this makes Vue part s work in hbs partials

const port = process.env.PORT || 6060;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public'))); //Esta linea busca los archivos como css, imagenes.

app.use('/', require('./routes/index'));

app.listen(port, () =>{
    console.log(`app is running on ${port}`);
})
