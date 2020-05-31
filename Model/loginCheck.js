const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

mongoose.connect('mongodb://127.0.0.1:27017/Customer_count', {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
})

const loginCheck_schema = new mongoose.Schema({
      // key and values declaration
      name: {
        type:String,
        required:true,
        trim: true
    }, surename: {
        type:String,
        required:true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        // must be at least 7 characters
        minlength: 7,
        trim: true
    },
    // store Token from jwt here
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
},
{
    timestamps: true
})

//using middleware to encrypt password
// loginCheck_schema.pre('save', async function(next) {
//     if(this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 8)
//     }

//     next()
// })


// generate token and save in mongoDb doc
loginCheck_schema.methods.generateToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisrun', {expiresIn: "7d"})

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token

}


    // check if the email and password match any
    // emails and password in the database
    loginCheck_schema.statics.findBy_Identity = async (email, password) => {
        console.log("findBy_Identity function")
        const user = await LoginCheck_DB.findOne({ email: email })

        //console.log('user: '+user)
        if (!user) {
            console.log('Unable to login')
            throw new Error('Unable to login')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new Error('Unable to login')
            console.log('Unable to login')
        }

        return user
    }

const LoginCheck_DB = mongoose.model('LoginCheck_DB', loginCheck_schema)
module.exports = LoginCheck_DB 