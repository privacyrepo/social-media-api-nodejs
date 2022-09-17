import cloudinary from "cloudinary";
import ResponseMessages from "../../../../contants/responseMessages.js";
import catchAsyncError from "../../../../helpers/catchAsyncError.js";
import ErrorHandler from "../../../../helpers/errorHandler.js";
import models from "../../../../models/index.js";
import utility from "../../../../utils/utility.js";

/// DELETE POST ///

const deletePost = catchAsyncError(async (req, res, next) => {
  if (!req.query.id) {
    return next(new ErrorHandler(ResponseMessages.INVALID_QUERY_PARAMETERS, 400));
  }

  const post = await models.Post.findById(req.query.id);

  if (!post) {
    return next(new ErrorHandler(ResponseMessages.POST_NOT_FOUND, 404));
  }

  if (post.owner.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler(ResponseMessages.UNAUTHORIZED, 401));
  }

  for (let i = 0; i < post.mediaFiles.length; i++) {
    let publicId = post.mediaFiles[i].public_id;
    let mediaType = post.mediaFiles[i].mediaType;

    if (mediaType === "video") {
      let thumbnailPublicId = post.mediaFiles[i].thumbnail.public_id;
      console.log(thumbnailPublicId);
      if (thumbnailPublicId) {
        await cloudinary.v2.uploader.destroy(thumbnailPublicId);
      }
      await cloudinary.v2.uploader.destroy(publicId, { resource_type: "video" });
    } else {
      await cloudinary.v2.uploader.destroy(publicId);
    }
  }

  const comments = await models.Comment.find({ post: post._id }).select("_id");

  if (comments.length > 0) {
    await models.Comment.deleteMany({ _id: { $in: comments } });
  }

  if (post.caption) {
    let hashtags = utility.getHashTags(post.caption);
    for (let i = 0; i < hashtags.length; i++) {
      const hashtag = await models.Tag.findOne({ name: hashtags[i] });
      if (hashtag) {
        const index = hashtag.posts.indexOf(post._id);
        if (index > -1) {
          hashtag.posts.splice(index, 1);
          hashtag.postsCount--;
          await hashtag.save();
        }
      }
    }
  }

  await post.remove();

  const user = await models.User.findById(req.user._id);
  user.postsCount--;

  await user.save();

  res.status(200).json({
    success: true,
    message: ResponseMessages.POST_DELETED,
  });
});

export default deletePost;
