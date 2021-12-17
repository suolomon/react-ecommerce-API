import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection Successful!"))
  .catch((err) => console.log(err));
  
app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)


app.listen(process.env.PORT || 5000, () =>
  console.log("Server running on PORT 5000")
);
