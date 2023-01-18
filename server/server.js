import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;

const app = express();
app.use(cors);

mongoose.set('strictQuery', false);
await mongoose.connect("mongodb+srv://admin-yusuf:yusuf123@cluster0.lcy2mwi.mongodb.net/?retryWrites=true&w=majority"
);
console.log("Mongodb connection is successful");

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:4000");
});