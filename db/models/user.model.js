import { sequelize } from "../connectionDB.js";
import {DataTypes} from "sequelize"
const userModel =sequelize.define("user",{
  userName:{
    type: DataTypes.STRING,
    allowNull:false
  },
  email:{
    type: DataTypes.STRING,
    allowNull:false,
    unique:true
  },password:{
    type: DataTypes.STRING,
    allowNull:false
  }

})
export default userModel