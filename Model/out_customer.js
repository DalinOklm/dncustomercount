const mongoose = require('mongoose')

const out_customer_schema = new mongoose.Schema({
    each_out_user: {
        type: Number
    }
},
{
    timestamps: true
})

const out_customer_DB = mongoose.model('out_customer_DB', out_customer_schema)
module.exports = out_customer_DB 