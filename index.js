import express from "express"
import { connectionDB } from "./db/connectionDB.js"
import userRouter from "./src/modules/users/user.route.js"
import postRouter from "./src/modules/posts/post.route.js"
import commentRouter from "./src/modules/comments/comment.route.js"
const app = express()
const port = 3000
app.use(express.json())
connectionDB()


app.use("/users",userRouter)
app.use("/posts",postRouter)
app.use("/comments",commentRouter)
app.use('*', (req, res, next)=>{
  res.status(404).json({msg:"page not found"})
})
app.listen(port, ()=>console.log(`app is running on port ${port}`))