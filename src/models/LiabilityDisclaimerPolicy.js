import mongoose from "mongoose";

const LiabilityDisclaimerPolicySchema = new mongoose.Schema(
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

// Use the correct model name "LiabilityDisclaimerPolicy"
export default mongoose.models.LiabilityDisclaimerPolicy || mongoose.model("LiabilityDisclaimerPolicy", LiabilityDisclaimerPolicySchema);