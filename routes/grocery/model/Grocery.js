const mongoose = require('mongoose');
// `grocery`: String
// - `purchased`: Boolean
// - `date`: Date.now

const grocerySchema = new mongoose.Schema({
    grocery: {
        type: String
    },
    purchased: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: ()=>Date.now()
    }
})


module.exports = mongoose.model('grocery', grocerySchema)