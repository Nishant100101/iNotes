import mongoose from "mongoose";

const connect = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to DataBase");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};
export default connect;
