import mongoose from "mongoose";

const PrivacyPolicySchema = new mongoose.Schema(
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

export default mongoose.models.PrivacyPolicy || mongoose.model("PrivacyPolicy", PrivacyPolicySchema);