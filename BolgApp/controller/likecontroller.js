const Post = require("../models/Bolg");
const Like = require("../models/likeModel");

exports.doLike = async (req,res) =>
{
    try{
        const {post , user} = req.body;
    
    const like = new Like({post , user});

    const saveLike = await like.save();

    const updatePost = await Post.findByIdAndUpdate(post , { $push : {like : saveLike._id}} , {new :true}).populate("like").exec();
   
    res.json(
        {
            post : updatePost,
        }
    );

    }
    catch(err){
  
        return res.json(
            {
                err : "error occured in liking post"
            }
        )
    }
    
}

exports.doUnlike = async (req, res) =>
{
   try
   {
    const {post , like} = req.body;
    const unlike = await Like.findOneAndDelete({post:post ,_id :like});
    const updatedPost = await Post.findByIdAndUpdate(post,{$pull : {like : unlike._id}} , {new :true})
    


    res.json(
        {
            post : updatedPost,
        })
   }
   catch(err)
   {
    return res.json(
        {
            err : "error occured in liking post"
        }
    )
   }


}