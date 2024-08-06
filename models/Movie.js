const mongoose = require('mongoose');

// define o schema do documento, ou seja, a estrutura
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: String,
    releaseDate: Date,
    rating: { type: Number, default: 0 },
    reviewed: { type: Boolean, default: false }
});

// exporta o modelo
module.exports = mongoose.model('Movie', movieSchema);
