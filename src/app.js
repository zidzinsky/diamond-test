const process = require('process');
const express = require('express');
const bodyParser = require('body-parser');
const { initialize } = require('express-openapi');
const swaggerUi = require('swagger-ui-express');
const path = require('path/posix');

require('dotenv').config();
const port = process.env.PORT;

const app = express();

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
    res.status(500).json({
        success: false,
        msg: 'Something went wrong'
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
