import {Router} from "express"
import * as CC from "./comment.controller.js"
const router = Router()


router.get("/",CC.readComment)
router.post("/", CC.createComment)
router.patch("/:id",CC.updateComment)
router.delete("/:id",CC.deleteComment)







export default router