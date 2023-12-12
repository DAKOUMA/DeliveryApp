import mongoose from "mongoose";;
const { Schema } = mongoose;

const itemSchema = {
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
}

export const Item = mongoose.model('Item', itemSchema);