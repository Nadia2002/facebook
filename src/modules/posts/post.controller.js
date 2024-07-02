import postModel from "../../../db/models/post.model.js"
import userModel from "../../../db/models/user.model.js"


export const createPost= async(req , res ,next)=>{
  const{title , content , author , userId}= req.body
  const user = await userModel.findOne({where:{id : userId}})
  if(!user){
    res.json({msg:"user cannot add post"})
  }
  const post = await postModel.create({title , content , author, userId})
  if(post){
    res.status(201).json({msg:"post created"})
  }
  res.json({msg:"failed to create post"})
  

}
export const readPost = async(req , res ,next)=>{
  
  const post = await postModel.findAll()
  
    res.json({msg:"all", post})

  }

  
export const updatePost= async(req , res, next)=>{
  const {title , content } = req.body
  const {id} = req.params
  const updatedPost =  await postModel.update({title , content},
    {where:{id}}
  )
  res.json({msg:"done",updatePost})
}  

export const deletePost = async(req , res, next)=>{
  const {id}= req.params
  const deletePost = await postModel.destroy({where :{id}})
  res.json({msg:"post deleted"})
}
export const getPostWithAuthor = async (req, res, next) => {
  const { id } = req.params;

  try {
    const post = await postModel.findByPk(id, {
      include: [user]
    });

    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.status(200).json({ post });
  } catch (error) {
    next(error);
  }
};