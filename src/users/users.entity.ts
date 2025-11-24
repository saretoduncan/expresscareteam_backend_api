import { Caregiver } from "src/users/caregiver.entity";
import { Roles } from "src/roles/roles.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { AdultHomeRepresentative } from "./adult-home-representative.entity";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToOne(() => Caregiver, (caregiver) => caregiver.user, { cascade: true })
  caregiver?: Caregiver;

  @OneToOne(() => AdultHomeRepresentative, (homeRep) => homeRep.user, {
    cascade: true,
  })
  adultHomeRepresentative?: AdultHomeRepresentative;

  @ManyToMany(() => Roles, (role) => role.users, { cascade: true })
  @JoinTable()
  roles: Roles[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
