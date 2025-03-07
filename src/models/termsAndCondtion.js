import mongoose from "mongoose";

const TermsSchema = new mongoose.Schema(
    {
    heading: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
    
},
{ timestamps: true }
);

export default mongoose.models.Terms || mongoose.model("Terms", TermsSchema);