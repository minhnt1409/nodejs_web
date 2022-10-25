const port = 3001;
// import * as path from 'path';
import express from 'express';
import morgan from 'morgan';
import { create } from 'express-handlebars';

const app = express();

const hbs = create({
    extname: '.hbs'
});

app.use(express.static('src/public'));
app.use(morgan('combined'));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');
// console.log(path.join(__dirname, 'public'));

app.get('/home', (req, res) => {
    return res.render('home');  
});
app.get('/news', (req, res) => {
    return res.render('news');  
});
// app.listen(3001);
app.listen(port, () => console.log('Example app listening at http://localhost:' + port));