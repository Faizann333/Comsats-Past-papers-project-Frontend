import { connectDB } from "../lib/mongoose.js";
import Review from "../models/review.js";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const reviews = await Review.find({}).sort({ createdAt: -1 });
    return res.status(200).json(reviews);
  }

  res.status(405).json({ error: "Method not allowed" });
}