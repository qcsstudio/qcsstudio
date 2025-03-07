import mongoose from "mongoose";

const ComplianceRegulatoryPoliciesSchema = new mongoose.Schema(
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

// Fix OverwriteModelError
export default mongoose.models.ComplianceRegulatoryPolicies || 
    mongoose.model("ComplianceRegulatoryPolicies", ComplianceRegulatoryPoliciesSchema);
