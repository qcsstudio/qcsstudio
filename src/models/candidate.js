import mongoose from "mongoose";

const CandidatesSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    collegeName: { type: String, required: true },
    course:{type:String},
    score: { type: Number, default: null },
    quiz_status: { 
      type: String, 
      enum: ["started", "cancelled", "finished"], 
      required: true 
    }
  },
  { timestamps: true },
  { strict: false }
);


export default mongoose.models.Candidates || mongoose.model("Candidates", CandidatesSchema);
