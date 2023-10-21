import appDataSource from "@dataSource";
import User from "@entities/User.entity";

const userRepo = appDataSource.getRepository(User)

export default userRepo
