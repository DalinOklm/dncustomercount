const mongoose = require('mongoose')




const users_byHours_schema = new mongoose.Schema({

    am_1: {
        type: Number
    },
    am_2: {
        type: Number
    },
    am_3: {
        type: Number
    },
    am_4: {
        type: Number
    },
    am_5: {
        type: Number
    },
    am_6: {
        type: Number
    },
    am_7: {
        type: Number
    },
    am_8: {
        type: Number
    },
    am_9: {
        type: Number
    },
    am_10: {
        type: Number
    },
    am_11: {
        type: Number
    },
    pm_12: {
        type: Number
    },
    pm_1: {
        type: Number
    },
    pm_2: {
        type: Number
    },
    pm_3: {
        type: Number
    },
    pm_4: {
        type: Number
    },
    pm_5: {
        type: Number
    },
    pm_6: {
        type: Number
    },
    pm_7: {
        type: Number
    },
    pm_8: {
        type: Number
    },
    pm_9: {
        type: Number
    },
    pm_10: {
        type: Number
    },
    pm_11: {
        type: Number
    },
    am_12: {
        type: Number
    }
},
{
    timestamps: true
})


const users_byHours_DB = mongoose.model('users_byHours_DB', users_byHours_schema)

module.exports = users_byHours_DB 