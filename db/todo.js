import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

const todo = mongoose.model("todo", todoSchema)

export default todo