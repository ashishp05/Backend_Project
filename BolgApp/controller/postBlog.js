
const Post = require("../models/Bolg");

exports.createPost = async (req ,res) =>
{
    try 
    {
        const {title , body } = req.body;
        const post = new Post({title ,body});
        const savePost = await post.save();

        res.json(
            {
                post :savePost,
                
            }
        )

    }
    catch(err)
    {
        return res.status(500).json(
            {
                err : "error occureed in creating post"
            }
        )
    }
}

exports.getAllPosts = async(req ,res) =>
{
    try
    {
        const posts = await Post.find().populate("like").exec();
        res.json(
            {
                  posts
            }
        )
    }
    catch(err)
    {
        return res.status(500).json(
            {
                err : "error occureed in fetching all post"
            }
        )
    }
    }
