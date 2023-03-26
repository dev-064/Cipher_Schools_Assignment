const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

    AcceptedRequests:[{
        EventID:{type:Schema.Types.ObjectId, ref: "event"},
    }],
    
    sentRequests:[{
        EventID:{type:Schema.Types.ObjectId, ref: "event"},
    }],
    createdEvents:[{
        EventID:{
            type:Schema.Types.ObjectId, ref: "event"
        }
    }]
})
module.exports= mongoose.model('user',UserSchema)
