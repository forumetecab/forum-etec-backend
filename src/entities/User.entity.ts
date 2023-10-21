import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

type courses = "Administração" | "Turismo" | "Informática" | "Edificações"

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar", { length: 255, nullable: false })
  fullName: string

  @Column({ type: "varchar", length: 255, nullable: false })
  email: string

  @Column({ type: "date", nullable: false })
  birthday: Date

  @Column({ type: "char", length: 2, nullable: false })
  day: string

  @Column({ type: "varchar", length: 255, nullable: false })
  thematic: courses
}


export default User
