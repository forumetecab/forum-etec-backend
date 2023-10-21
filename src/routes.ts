import userController from '@controllers/user.controller';
import { Router } from 'express';

const router = Router()

router.get("/", (req, res) => {
  res.json({ message: "Hello World" })
})

router.get("/user", userController.index)
router.post("/user", userController.store)

export default router
