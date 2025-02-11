import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
    name: {
        type: String,
        unique: true,
        require: true,
    },
    show_on_front: {
        type: Boolean,
    },
},
{ timestamps: true }
);

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);