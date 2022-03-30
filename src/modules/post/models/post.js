import mongoose from 'mongoose';


const postSchema = new mongoose.Schema({
    caption: String,

    images: [
        {
            public_id: String,
            url: String
        }
    ],

    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },

    likes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    ],

    comments: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Comment"
        }
    ],

    postStatus: {
        type: String,
        default: "active"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
})


postSchema.index({ owner: true });
const Post = mongoose.model("Post", postSchema);

export default Post;