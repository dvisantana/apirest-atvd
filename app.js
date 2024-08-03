const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

MusicaRouter = require('./routes/musica')
app.use('/musica', MusicaRouter)

LoginRouter = require('./routes/login')
app.use('/', LoginRouter)

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_doc.json')

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, () => {
    console.log("Rodando... ")
})