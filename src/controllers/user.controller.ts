import userRepo from "@repositories/user.repository";
import { Request, Response } from "express";

class userController {
  async index(req: Request, res: Response) {
    const users = await userRepo.find()

    return res.json(users)
  }

  async show(req: Request, res: Response) { }

  async store(req: Request, res: Response) {
    const { fullName, email, birthday, day, thematic } = req.body

    const userAlreadySubscribed = await userRepo.findOne({ where: { email, thematic } })

    if (userAlreadySubscribed) {
      return res.sendStatus(201)
    }

    const user = userRepo.create({
      fullName,
      email,
      birthday,
      day,
      thematic
    })

    await userRepo.save(user)

    return res.sendStatus(201)
  }
}

export default new userController()
