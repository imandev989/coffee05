const mongoose = require("mongoose");



const connectToDB = async () => {
    try {
        if(mongoose.connection[0].readyState){
            return true;
        } else {
            await mongoose.connect(process.env.MONGO_URL);
            console.log("Connect to DB Successfully");
        }
    } catch (error) {
        console.error("Connect to DB has Error -> ", error)
    }
}


export default connectToDB;