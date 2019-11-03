const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./src/routes/index');

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE']
};

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/', routes);
app.use(morgan('dev'));

const db = process.env.MONGO_URI;
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('mongo db connected.'))
    .catch((err) => console.error(err));

const port = process.env.PORT;
app.listen(port, () => console.log(`server running on port ${port}`));
