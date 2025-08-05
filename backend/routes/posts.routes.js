import { Router } from "express";
import { activeCheck, createPost,getAllPosts,deletePost,commentPost,getCommentsByPost,deleteCommentOfUser,increament_likes } from "../controllers/posts.controllers.js";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

router.route('/').get(activeCheck);
router.route('/post').post(upload.single('media'),createPost);
router.route('/posts').get(getAllPosts);
router.route('/delete_post').delete(deletePost);
router.route('/comment').post(commentPost);
router.route('/get_comments').post(getCommentsByPost);
router.route('/delete_comment').delete(deleteCommentOfUser);
router.route('/increament_post_like').post(increament_likes);



export default router;