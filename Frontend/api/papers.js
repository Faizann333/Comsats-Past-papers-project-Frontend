import { connectDB } from "../lib/mongoose.js";
import Paper from "../models/paper.js";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const papers = await Paper.find({});
    return res.status(200).json(papers);
  }

  res.status(405).json({ error: "Method not allowed" });
}