import mongoose from 'mongoose';


const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'school',
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS)
        return console.log('connect to database successfully......')
    } catch (error) {
        return console.log(error);
    }
}

export default connectDB;


