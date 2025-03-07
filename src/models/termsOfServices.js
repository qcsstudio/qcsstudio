import mongoose from "mongoose";

const TermsOfServiceSchema = new mongoose.Schema(
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

export default mongoose.models.TermsOfService || mongoose.model("TermsOfService", TermsOfServiceSchema);