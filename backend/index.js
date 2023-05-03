import expess from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cros from "cors";
import cookieParser from "cookie-parser";

import toursRouter from "./routers/tours.js";

dotenv.config();
const app = expess();
const port = process.env.port || 8000;

//database connection
mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};
app.get("/", (req, res) => {
  res.send("API is working");
});

//middleware
app.use(expess.json());
app.use(cros());
app.use(cookieParser());
app.use("/tours", toursRouter);

app.listen(port, () => {
  connect();
  console.log("Server lestening on port", port);
});
