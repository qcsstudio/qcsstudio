import mongoose from "mongoose";

const PolicySchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
            enum: ["privacy_policy", "terms_condition", "terms_service", "refund_cancellation", "intellectual_property", "Compliance_regulatory", "liability_Disclaimer"],
        },
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

export default mongoose.models.Policies || mongoose.model("Policies", PolicySchema);