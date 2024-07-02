import { Sequelize } from "sequelize";
export const sequelize = new Sequelize ('assgiment6', 'root', '',{
  host:'localhost',
  dialect:'mysql'
});
 export const connectionDB= async()=>{
  return await sequelize.sync({alter:false , force:false}).then(()=>{
    console.log("connection db success")
  }).catch(err=>{
    console.log({msg:"connection db failed", err})
  })
}