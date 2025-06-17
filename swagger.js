const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Acordos e Dívidas',
      version: '1.0.0',
      description: 'API para cadastro de clientes, autenticação, consulta de dívidas e geração de acordos.',
    },
    servers: [
      {
        url: 'http://localhost:8080/api',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./swagger/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};