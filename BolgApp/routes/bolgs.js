 const express =require("express");
 const router = express.Router();


 const {createComment ,deleteComment} = require("../controller/commentcontroller");
 const {createPost ,getAllPosts} = require("../controller/postBlog");
 const {doLike ,doUnlike} = require("../controller/likecontroller");






 router.post("/comment/create", createComment);
 router.post("/comment/delete", deleteComment);
 router.post("/post/create", createPost);
 router.get("/posts" , getAllPosts);
 router.post("/like" ,doLike);
 router.post("/unlike" ,doUnlike);



 module.exports=router;