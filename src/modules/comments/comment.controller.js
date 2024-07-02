import commentModel from "../../../db/models/comment.model.js"
import userModel from "../../../db/models/user.model.js"
import postModel from "../../../db/models/comment.model.js"


export const createComment= async(req , res ,next)=>{
  const{ content, userId , postId}= req.body
  const user = await userModel.findOne({where:{id :userId}})
  if(!user){
    return res.json({msg:"user not found"})
  }
  
  const post = await postModel.findOne({where:{id :postId}})
  if(!post){
    return res.json({msg:"post not found"})
  }
  const comment = await commentModel.create({content , userId , postId})
  if(comment){
    res.status(201).json({msg:"comment created", comment})
  }
  res.json({msg:"failed to write comment"})
  

}
export const readComment = async(req , res ,next)=>{
  const {postId}= req.params
  
  const comment = await commentModel.findOne({postId})
  
    res.json({msg:"all", comment})

  }

  
export const updateComment= async(req , res, next)=>{
  const {content } = req.body
  const {userId} = req.params
  const updatedComment =  await commentModel.update({content},
    {where:{userId}}
  )
  res.json({msg:"done",updateComment})
}  

export const deleteComment = async(req , res, next)=>{
  const {userId}= req.params
  const deleteComment = await commentModel.destroy({where :{userId}})
  res.json({msg:"Comment deleted"})
}