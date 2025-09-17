
import { Router } from "express";
import { register,login,uploadProfilePicture,updateUserProfile,getUserAndProfile,
  updateProfileData,getAllUserProfile,downloadProfile,sendConnectionRequest,getMyConnectionRequests,whatAreMyConnections,acceptConnectionRequest,getUserProfileBasedOnUsername } from "../controllers/user.controllers.js";
import multer from "multer";
import { get } from "mongoose";
import { CloudinaryStorage } from 'multer-storage-cloudinary'; // Import
import { v2 as cloudinary } from 'cloudinary'; // Import

const router = Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'ProConnect_Profiles', // New folder for profile pictures
    allowed_formats: ['jpeg', 'png', 'jpg'],
  },
});

const upload = multer({ storage: storage });

router.route('/upload_profile_picture').post(upload.single('profile_picture'),uploadProfilePicture)

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/user_update').post(updateUserProfile);
router.route('/get_user_and_profile').get(getUserAndProfile);
router.route('/update_profile_data').post(updateProfileData);
router.route('/get_all_profiles').get(getAllUserProfile);
router.route('/user_download_resume').get(downloadProfile);
router.route('/user/send_connection_request').post(sendConnectionRequest);
router.route('/user/getConnectionRequests').get(getMyConnectionRequests);
router.route('/user/user_connection_request').get(whatAreMyConnections);
router.route('/user/accept_connection_request').post(acceptConnectionRequest);
router.route('/user/get_profile_based_on_username').get(getUserProfileBasedOnUsername);
export default router;