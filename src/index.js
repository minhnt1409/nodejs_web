const port = 3001;
// import * as path from 'path';
import express from 'express';
import morgan from 'morgan';
import { create } from 'express-handlebars';
import { route } from './route/index.js';

const app = express();

const hbs = create({
    extname: '.hbs'
});

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

// Routes init
route(app);

app.listen(port, () => console.log('Example app listening at http://localhost:' + port));
