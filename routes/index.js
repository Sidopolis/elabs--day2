import { Router } from "express"
import createtodo from "./createtodo.js"
import deletetodo from "./deletetodo.js"
import gettodo from "./gettodo.js"
import updatetodo from "./updatetodo.js"

const router = Router()

router.post("/create", createtodo)
router.delete("/delete/:id", deletetodo)
router.put("/update/:id", updatetodo)
router.get("/get-todos", gettodo)



export default router