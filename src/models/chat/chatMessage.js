import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        enum: ["text", "image", "video", "audio"],
        default: "text",
        required: true,
    },

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    read: {
        type: Boolean,
        default: false,
    },

    readAt: {
        type: Date,
    },

    deleted: {
        type: Boolean,
        default: false,
    },

    deletedAt: {
        type: Date,
        default: null,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

chatMessageSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);

export default ChatMessage;
