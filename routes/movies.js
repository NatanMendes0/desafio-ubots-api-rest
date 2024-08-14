// rotas para cada recurso

const express = require('express');
const router = express.Router();

// importa o modelo Movie
const Movie = require('../models/Movie');

// cria um novo filme
router.post('/', async (req, res) => {
    // cria um novo filme com os dados enviados no corpo da requisição
    const movie = new Movie(req.body);
    try {
        const savedMovie = await movie.save();
        res.status(201).json(savedMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// listar todos os filmes
router.get('/', async (req, res) => {
    // busca todos os filmes no banco de dados
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// atualizar um filme
router.put('/:id', async (req, res) => {
    // procura um filme pelo id e atualiza com os dados enviados no corpo da requisição
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// deletar um filme
router.delete('/:id', async (req, res) => {
    // procura um filme pelo id e deleta
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.json({ message: 'Filme deletado!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// avaliar um filme
router.patch('/:id/rate', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (movie) {
            movie.rating = req.body.rating;
            movie.reviewed = true;
            await movie.save();
            res.json(movie);
        } else {
            res.status(404).json({ message: 'Filme não encontrado!' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// indicar um filme não avaliado
router.get('/unreviewed', async (req, res) => {
    try {
        const movies = await Movie.find({ reviewed: false });
        if (movies.length > 0) {
            res.json(movies);
        } else {
            res.status(404).json({ message: 'Nenhum filme não avaliado encontrado!' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// exporta o router para ser usado em outros arquivos
module.exports = router;