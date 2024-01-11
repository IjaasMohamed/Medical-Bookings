const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser:true,
        newUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.DB)
    } catch (error) {
        
    }
}