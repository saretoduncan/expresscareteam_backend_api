import { JobsEntity } from "src/jobs/job.entity";
import { AdultHomeRepresentative } from "src/users/adult-home-representative.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "adult_homes" })
export class AdultHome {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  street: string;

  @Column()
  zipcode: string;

  @Column({ nullable: true })
  website?: string;

  @Column({ nullable: false, type: "text" })
  homeDescription: string;

  @OneToMany(() => AdultHomeRepresentative, (rep) => rep.adultHome)
 
  reps: AdultHomeRepresentative[];

  @OneToMany(() => JobsEntity, (job) => job.adult_home)
 
  jobs: JobsEntity[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
