import getProfileDetails from "./profile/getProfileDetails.js";
import changePassword from "./profile/changePassword.js";
import updateProfile from "./profile/updateProfile.js";
import uploadAvatar from "./profile-picture/uploadAvatar.js";
import deleteAvatar from "./profile-picture/deleteAvatar.js";
import uploadProfilePicture from "./profile-picture/uploadProfilePic.js";
import removeProfilePicture from "./profile-picture/removeProfilePic.js";
import followUnfollowUser from "./follow/followUnfollowUser.js";
import getUserDetails from "./user/getUserDetails.js";
import getFollowers from "./follow/getFollowers.js";
import getFollowings from "./follow/getFollowings.js";
import changeEmailOtp from "./profile/changeEmailOtp.js";
import changeEmail from "./profile/changeEmail.js";
import changeUsername from "./profile/changeUsername.js";
import checkUsernameAvailable from "./check-username/checkUsernameAvailable.js";
import deleteProfile from "./profile/deleteProfile.js";
import searchUser from "./user/searchUser.js";
import getRecommendedUsers from "./recommend-users/getRecommendedUsers.js";
import saveDeviceInfo from "./login-info/saveDeviceInfo.js";
import getUserDeviceInfo from "./login-info/getUserDeviceInfo.js";
import deleteDeviceInfo from "./login-info/deleteDeviceInfo.js";
import acceptFollowRequest from "./follow/acceptFollowRequest.js";
import cancelFollowRequest from "./follow/cancelFollowRequest.js";
import removeFollowRequest from "./follow/removeFollowRequest.js";
import getUserPosts from "./user/getUserPosts.js";
import getFollowRequests from "./follow/getFollowRequests.js";
import deactivateAccount from "./profile/deactivateAccount.js";
import reactivateAccountOtp from "./profile/reactivateAccountOtp.js";
import reactivateAccount from "./profile/reactivateAccount.js";
import addChangePhoneOtp from "./profile/addChangePhoneOtp.js";
import addChangePhone from "./profile/addChangePhone.js";
import verifyPassword from "./verify-password/verifyPassword.js";
import removeFollower from "./follow/removeFollower.js";
import searchFollowers from "./follow/searchFollowers.js";
import searchFollowings from "./follow/searchFollowings.js";
import savePreKeyBundle from "./profile/savePreKeyBundle.js";
import getPreKeyBundle from "./profile/getPreKeyBundle.js";
import getDeviceId from "./profile/getDeviceId.js";
import saveDeviceId from "./profile/saveDeviceId.js";
import saveFcmToken from "./profile/saveFcmToken.js";
import getFcmToken from "./profile/getFcmToken.js";
import getLoginHistory from "./login-info/getLoginHistory.js";
import deleteLoginInfo from "./login-info/deleteLoginInfo.js";
import saveLoginInfo from "./login-info/saveLoginInfo.js";
import getLoginInfo from "./login-info/getLoginInfo.js";

const userController = {};

userController.getProfileDetails = getProfileDetails;
userController.changePassword = changePassword;
userController.updateProfile = updateProfile;
userController.uploadAvatar = uploadAvatar;
userController.deleteAvatar = deleteAvatar;
userController.uploadProfilePicture = uploadProfilePicture;
userController.removeProfilePicture = removeProfilePicture;
userController.followUnfollowUser = followUnfollowUser;
userController.getUserDetails = getUserDetails;
userController.getFollowers = getFollowers;
userController.getFollowings = getFollowings;
userController.changeEmailOtp = changeEmailOtp;
userController.changeEmail = changeEmail;
userController.changeUsername = changeUsername;
userController.checkUsernameAvailable = checkUsernameAvailable;
userController.deleteProfile = deleteProfile;
userController.searchUser = searchUser;
userController.getRecommendedUsers = getRecommendedUsers;
userController.saveDeviceInfo = saveDeviceInfo;
userController.getUserDeviceInfo = getUserDeviceInfo;
userController.deleteDeviceInfo = deleteDeviceInfo;
userController.acceptFollowRequest = acceptFollowRequest;
userController.cancelFollowRequest = cancelFollowRequest;
userController.removeFollowRequest = removeFollowRequest;
userController.getUserPosts = getUserPosts;
userController.getFollowRequests = getFollowRequests;
userController.deactivateAccount = deactivateAccount;
userController.reactivateAccountOtp = reactivateAccountOtp;
userController.reactivateAccount = reactivateAccount;
userController.addChangePhoneOtp = addChangePhoneOtp;
userController.addChangePhone = addChangePhone;
userController.verifyPassword = verifyPassword;
userController.removeFollower = removeFollower;
userController.searchFollowers = searchFollowers;
userController.searchFollowings = searchFollowings;
userController.savePreKeyBundle = savePreKeyBundle;
userController.getPreKeyBundle = getPreKeyBundle;
userController.getDeviceId = getDeviceId;
userController.saveDeviceId = saveDeviceId;
userController.saveFcmToken = saveFcmToken;
userController.getFcmToken = getFcmToken;
userController.getLoginHistory = getLoginHistory;
userController.deleteLoginInfo = deleteLoginInfo;
userController.saveLoginInfo = saveLoginInfo;
userController.getLoginInfo = getLoginInfo;

export default userController;
