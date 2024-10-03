//server/config/dbConn.js
//server/config/dbConn.js
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB

// server/config/dbConn.js