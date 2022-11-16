const mongoose = require("mongoose")

const dbConnect = async () => {
    try{
        await mongoose.connect("mongodb+srv://kavitha5675:DS39acV957k7HgMp@learnings-mern-blog.ymisrbv.mongodb.net/?retryWrites=true&w=majority",{
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


