const { Schema, model, models, Collection } = require('mongoose');

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        collation: {
            locale: 'en',
            strength: 2
        }
    }
);

const User = model('user', userSchema) // sazdavame user shemata s ref user 

module.exports = { User } //exportirame shmetaa i ia requere v databe js daila 