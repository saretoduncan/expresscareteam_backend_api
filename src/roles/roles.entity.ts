import { RoleEnum } from "src/common/enums";
import { User } from "src/users/users.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "roles" })
export class Roles {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: RoleEnum;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
