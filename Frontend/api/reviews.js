import { connectDB } from "../lib/mongoose";
import Review from "../models/review";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const reviews = await Review.find({});
    return res.status(200).json(reviews);
  }

  res.status(405).json({ error: "Method not allowed" });
}