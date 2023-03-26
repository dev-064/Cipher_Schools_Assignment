const mongoose = require('mongoose');
const mongooseURL = "mongodb+srv://dev064:Adityajha%4011@cluster1.tizixwp.mongodb.net/CipherSchoolAssignmentDB?retryWrites=true&w=majority"
const startdb=()=>{
    mongoose.connect(mongooseURL)
    mongoose.connection.useDb("admin")
    console.log("Database is connected succesfully")
}
module.exports = startdb;