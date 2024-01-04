const Post = require("../models/Bolg");
const Comment = require("../models/commentModel");

exports.createComment = async(req,res) =>
{
    try
    {
        const {post ,user ,body} = req.body;

        const comment = new Comment({post ,user ,body});

        const saveComment = await comment.save();

        //find that post and update it 

        const updatedPost = await Post.findByIdAndUpdate(post , { $push:{comment :saveComment._id}},{new:true})
        .populate("comment").exec();
          

        res.json(
            {
                post :updatedPost
            }
        )
    }
    catch(err)
    {
        return res.status(500).json(
            {
                err : "error occureed"
            }
        )

    }
}

exports.deleteComment = async (req ,res) =>
{
    try{
        const {post , comment} = req.body;

        const deletecomment = await Comment.findOneAndDelete({post :post , _id :comment});

        const updatePost = await Post.findByIdAndUpdate(post , {$pull : {comment : deletecomment._id}} , {new :true});

        res.json(
            {
                post :updatePost,
            }
        )

    }
    catch(err)
    {
        return res.status(500).json(
            {
                err : "error occureed in deleting coments"
            }
        )
 
    }

}