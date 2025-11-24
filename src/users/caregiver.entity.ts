import { CaregiverRequirements } from "src/caregiver-requirements/caregiver-requirements.entity";
import { User } from "src/users/users.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "caregivers" })
export class Caregiver {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column({ unique: true })
  email: string;
  @Column({ type: "timestamptz" })
  dateOfBirth: Date;
  @Column()
  gender: string;
  @Column()
  phoneNumber: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  street: string;
  @Column()
  zipcode: string;
  @Column({ unique: true })
  userId: string;
  @OneToOne(() => User, (user) => user.caregiver)
  @JoinColumn({ name: "userId" })
  user: User;
  @OneToOne(
    () => CaregiverRequirements,
    (requirements) => requirements.caregiver
  )
  requirements?: CaregiverRequirements;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
