import mongoose from "mongoose";

const HabitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    frequency: {
        type: String,
        required: true,
    },
    streak: {
        type: Number,
        default: 0,
    },
    progress: [
        {
            date: { type: Date, required: true },
            completed: { type: Boolean, required: true },
        },
    ],
});

const Habit = mongoose.model("Habit", HabitSchema);

export default Habit;