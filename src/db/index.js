import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const connectionInst = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n Mongoose connected on port ${process.env.PORT}|| DB host: ${connectionInst.connection.host} \n`);
    } catch (error) {
        console.log("DB error", error)
        process.exit(1);
    }
}

export default connectDB;