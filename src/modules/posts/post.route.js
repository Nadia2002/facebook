import {Router} from "express"
import * as PC from "./post.controller.js"
const router = Router()


router.get("/",PC.readPost)
router.post("/", PC.createPost)
router.patch("/:id",PC.updatePost)
router.delete("/:id",PC.deletePost)
router.get('/:id/author', PC.getPostWithAuthor);






export default router