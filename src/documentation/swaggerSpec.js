const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.1',
    info: {
        title: 'Labyrinth api',
        version: '1.0.0',
        description: 'Labyrinth node.js api for hackaton purpose'
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        }
    },
    security: [{
        bearerAuth: []
    }]
};

const swaggerOptions = {
    swaggerDefinition,
    apis: ['src/routes/**.js']
};

module.exports = swaggerJSDoc(swaggerOptions);
