import mongoose from "mongoose";
import Qna from "../models/qna.model.js";

const QnaSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true, // avoid duplicate questions
    trim: true
  },
  answer: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// model name will automatically create "qnas" collection
const Qna = mongoose.model("Qna", QnaSchema);

export default Qna;
