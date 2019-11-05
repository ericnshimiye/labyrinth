const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./src/routes/index');
const passport = require('passport');
const passportJwtMiddleWare = require('./src/middleware/passport');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/documentation/swaggerSpec');

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE']
};

passportJwtMiddleWare(passport);
app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use('/', router);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
