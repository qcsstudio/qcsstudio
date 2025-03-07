import mongoose from "mongoose";

const IntellectualPropertyPolicySchema = new mongoose.Schema(
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
export default mongoose.models.IntellectualPropertyPolicy || 
    mongoose.model("IntellectualPropertyPolicy", IntellectualPropertyPolicySchema);
