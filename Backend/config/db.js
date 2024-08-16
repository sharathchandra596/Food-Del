import mongoose from "mongoose";


export async function connectDB() {
    await mongoose.connect("mongodb+srv://sharathjoshi596:sharathjoshi596@cluster0.inl0o.mongodb.net/food_del").then(() => {
        console.log("db connected")
    }).catch((err) => {
        console.log(err)
    })
}