const { Schema, model, Types } = require('mongoose'); // Updated to import `Types` directly

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
    min: 1878,
    max: 2100
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  description: {
    type: String,
    required: true,
    maxLength: 1000
  },
  imageURL: {
    type: String,
    required: true,
    match: /^https?:\/\/.+/
  },
  cast: {
    type: [Types.ObjectId], // Correctly references `Types.ObjectId`
    ref: 'Cast',
    default: []
  },
  author: {
    type: Types.ObjectId, // Correctly references `Types.ObjectId`
    ref: 'User'
  }
});

const Movie = model('Movie', movieSchema);

module.exports = { Movie };