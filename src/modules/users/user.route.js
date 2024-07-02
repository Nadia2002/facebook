import * as UC from "./user.controller.js"
import {Router} from "express"
const router = Router()

router.post("/",UC.userRegister)
router.post("/login",UC.userLogin)
router.get('/:userId/posts/:postId/comments', UC.getUserWithPostAndComments);
export default router