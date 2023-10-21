import Express from "express";
import appDataSource from "@dataSource";
import "express-async-errors"
import cors from "cors"
import router from "@routes";

appDataSource.initialize().then(() => {
  const app = Express()

  app.use(cors())

  app.use(Express.json())
  app.use(Express.urlencoded({ extended: true }))

  app.use(router)

  app.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
  })
})
