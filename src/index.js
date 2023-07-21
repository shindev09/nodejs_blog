const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes/index.js');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
		app.set('views', path.join(__dirname, 'resources/views'));

		// Routes init
		route(app);

		app.listen(3000);
