import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        fullName: {
            type: String
        },
        email: {
            type: String,
            unique: true,
        },
        contact_Number: {
            type: String,
        },
        address: {
            type: String,
        },
        collegeName: {
            type: String,
        },
        calculated_passion: {
            type: String,
        },
        option_a: {
            type: Number
        },
        option_b: {
            type: Number
        },
        option_c: {
            type: Number
        },
        option_d: {
            type: Number
        },
        option_e: {
            type: Number
        },
    },
    {
        timestamps: true, 
    }
);

// Export the model (reuse if already defined)
export default mongoose.models.Student || mongoose.model("Student", StudentSchema);
