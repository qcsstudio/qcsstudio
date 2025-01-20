import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
}, { timestamps: true });

// AdminSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 10);
// });

// AdminSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

export default mongoose.models.Admin || mongoose.model("Admin", AdminSchema);