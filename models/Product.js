import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },

    desc: { type: String, required: true },

    img: { type: String, required: true },
    categories: { type: Array },
    colour: { type: String },
    size: { type: String },
    price: { type: Number, required: true },
  },
  { timestamp: true }
);

export default mongoose.model("Product", ProductSchema);
