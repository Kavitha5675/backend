const mongoose = require("mongoose")

const dbConnect = async () => {
    try{
        await mongoose.connect(MONGO_URL,{
            useUnifiedTopology : true,
            useNewUrlParser : true
        })
        console.log("Connected to MongoDB")
    }catch (e) {
        console.log("Error occured", e);
    }
}

module.exports = dbConnect;

// mongoose.connect


