// middleware file
const jwt = require('jsonwebtoken')
const User = require('../Model/loginCheck')

const auth = async(req, res, next) => {
    try {
        // grab the token from the header key, in the request
        // new code
        const token = req.cookies['auth_token']

        // old code 
        // const token = req.header('Authorization').replace('Bearer ','')
       // console.log("token._id: "+ token._id)

        // check if it a valid token
        // this is a object that contain the user's ID
        const docToken = jwt.verify(token,'thisrun')

        // in the token document, there is an ID associated with the user
        // use that id to find the user in the database
       // console.log("docToken._id: "+ docToken._id)
        const user = await User.findOne({ _id: docToken._id, 'tokens.token': token })

        // if no user were find, throw an error
        if(!user)
        {
          throw new Error();
        }

        // add 'user' property to the request method and 
        // assign the user find in the database
        req.user = user;
        req.token = token;
        console.log("router authorisation check, success")
      

        // the 'next' method tell nodejs to move to the next codes
        next()

    } catch (e) {
       // res.status(401).send('error')
        res.render('logout')
    }
}

// export the auth method, so we can use it in the router file
module.exports = auth