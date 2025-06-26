// Description: This is the entry point for the ConnectU backend application.
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("ConnectU Backend is Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
