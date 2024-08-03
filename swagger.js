const swaggerAutogen = require('swagger-autogen')()

output = './swagger_doc.json'
endpoints = ['./routes/agenda.js', './routes/login.js']

const doc = {
  info: {
    version: '1.0',      // by default: '1.0.0'
    title: 'Agenda de contatos',        // by default: 'REST API'
    description: 'API REST para gerenciamento de contatos'
  }
}

swaggerAutogen(output, endpoints, doc)