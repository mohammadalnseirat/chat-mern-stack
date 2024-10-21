import mongoose from "mongoose";


export const connectionToDatabase = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to database', connect.connection.host)
    } catch (error) {
        console.log('Error Connecting to database', error)
        process.exit(1)
        
    }
}