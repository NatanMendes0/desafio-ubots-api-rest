// chamar as dependências utilizadas
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// inicialização do servidor
const app = express();

// middleware para aceitar requisições POST
app.use(bodyParser.json());

// conexão com o MongoDB usando Mongoose
mongoose.connect('mongodb://localhost:27017/movies', {
    // Configurações para evitar warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

// verificar se a conexão com o MongoDB foi bem sucedida
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Conectado no MongoDB!');
});

// inicialização do servidor na porta 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`);
});

// importação das rotas
const movieRoutes = require('./routes/movies');
app.use('/movies', movieRoutes);

