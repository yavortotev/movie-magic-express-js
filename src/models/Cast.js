
const { Schema, SchemaType: Types, model } = require('mongoose')

const castSchema = new Schema({


  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true,
    min: 0,
    max: 255
  },
  born: {
    type: String,
    required: true
  },
  nameInMovie: {
    type: Number,
    required: true,
  },
    
  imageURL: {
    type: String,
    required: true,
    regexp : /^https?:\/\/.+/
  },
  // movie: {
  //   type: [Types.ObjectId],
  //   ref: 'Movie'
  // }
})

const Cast = model('Cast',castSchema)


module.exports = { Cast }