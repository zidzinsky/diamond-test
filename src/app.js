const process = require('process');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initialize } = require('express-openapi');
const swaggerUi = require('swagger-ui-express');
const path = require('path/posix');

require('dotenv').config();
const port = process.env.PORT;

const app = express();

app.use(cors());

initialize({
    app,
    apiDoc: require('./api/api-doc'),
    paths: path.join(__dirname, './api/paths'),
    consumesMiddleware: {
        'application/json': bodyParser.json()
    }
});

app.use(
    '/swagger',
    swaggerUi.serve,
    swaggerUi.setup(null, {
        swaggerOptions: {
            url: `http://localhost:${port}/api-docs`
        }
    })
);

app.use((err, req, res, next) => {
    const { status, errors = [] } = err;

    if (status === 400) {
        res.status(400).json({
            success: false,
            msg: 'Invalid Request',
            errors: errors.map((e) => {
                return { msg: `${e.path} ${e.message}` };
            })
        });
        return;
    }

    res.status(500).json({
        success: false,
        msg: 'Something went wrong.'
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
