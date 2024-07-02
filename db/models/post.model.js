import { sequelize } from "../connectionDB.js";
import {DataTypes, HasMany} from "sequelize"
import userModel from "./user.model.js";
const postModel =sequelize.define("post",{
  title:{
    type: DataTypes.STRING,
    allowNull:false
  },
  content:{
    type: DataTypes.STRING,
    allowNull:false
  },author:{
    type: DataTypes.STRING,
    allowNull:false
  }

})
postModel.belongsTo(userModel,{
  onDelete:"CASCADE",
  onUpdate:"CASCADE"
})
userModel.hasMany( postModel)
export default postModel