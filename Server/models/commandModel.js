import mongoose from "mongoose";
const { Schema } = mongoose;

const commandSchema = new Schema(
    {
        item: [{
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            number: {
                type: Number,
                required: true
            }
        }],
        localisation: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }
)

export const Command = mongoose.model('Command', commandSchema)