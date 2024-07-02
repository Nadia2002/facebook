import userModel from "../../../db/models/user.model.js";
import bcrypt from 'bcryptjs'

export const userRegister =async(req , res , next)=>{
  const {userName , email , password}= req.body
  const userExist = await userModel.findOne({where:{email}})
  const hashedPassword = await bcrypt.hash(password, 10);
  if(!userExist){
  const user = await userModel.create({userName, email,password: hashedPassword })
  res.status(201).json({msg:"success register",user})
    
  }
  else{
    res.status(409).json({msg:"user already exist"})
  }
}


export const userLogin =async(req, res,next)=>{
  const { email , password}= req.body
  const userExist = await userModel.findOne({where:{email, password}})
  if(userExist){
  res.status(200).json({msg:"success login"})
    
  }
  else{
    res.status(409).json({msg:"user not exist or email or passord is not valid"})
  }
}
export const getUserWithPostAndComments = async (req, res, next) => {
  const { userId, postId } = req.params;

  try {
    const user = await userModel.findByPk(userId, {
      include: {
        model: Post,
        where: { id: postId },
        include: [Comment]
      }
    });

    if (!user) {
      return res.status(404).json({ msg: 'User or Post not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};