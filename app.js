require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

// Rotas
const authRoutes = require('./routes/auth.routes');
const clienteRoutes = require('./routes/cliente.routes');
const dividaRoutes = require('./routes/divida.routes');
const acordoRoutes = require('./routes/acordo.routes');
const { swaggerUi, swaggerSpec } = require('./swagger');

app.use('/api/', authRoutes);
app.use('/api/', clienteRoutes);
app.use('/api/', dividaRoutes);
app.use('/api/', acordoRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



