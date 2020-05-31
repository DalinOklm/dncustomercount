const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/Customer_count', {
//     useNewUrlParser: true,
//     useCreateIndex:true,
//     useUnifiedTopology:true
// })


mongoose.connect('mongodb+srv://new_user_one:%39%30%30%31%30%30@customercouter-uk7nd.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

//1234
// %31%32%33%34

//900100
//%39%30%30%31%30%30




const user_count_schema = new mongoose.Schema({
    each_user: {
        type: Number
    }
},
{
    timestamps: true
})

const user_count_DB = mongoose.model('user_count_DB', user_count_schema)
module.exports = user_count_DB 