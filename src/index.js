const port = 3000;
// import * as path from 'path';
import express from 'express';
import morgan from 'morgan';
import { create } from 'express-handlebars';
import { route } from './route/index.js';
import { connect } from './config/db/index.js';
import pkg from 'method-override';
const { MethodOverrideOptions } = pkg;
const app = express();

const hbs = create({
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a+b,
    }
});

connect();

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'));
app.use(pkg('_method'));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

// Routes init
route(app);

app.listen(port, () => console.log('App listening at http://localhost:' + port));
