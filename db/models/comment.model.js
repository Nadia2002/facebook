import { sequelize } from "../connectionDB.js";
import {DataTypes, HasMany} from "sequelize"
import userModel from "./user.model.js";
import postModel from "./post.model.js";
const commentModel =sequelize.define("comment",{

  content:{
    type: DataTypes.STRING,
    allowNull:false
  }

})
userModel.hasMany(commentModel,{
  onDelete:"CASCADE",
  onUpdate:"CASCADE"
})
commentModel.belongsTo(userModel)
postModel.hasMany(commentModel,{
  onDelete:"CASCADE",
  onUpdate:"CASCADE"
})
commentModel.belongsTo(postModel)



export default commentModel