import { AdultHome } from "src/adult-home/adult-home.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { JobApplications } from "./job_application.entity";

export enum EJOBTYPE {
  PART_TIME = "PART_TIME",
  FULL_TIME = "FULL_TIME",
  FILL_IN = "FILL_IN",
}
export enum EJOBROLE {
  HCA = "HCA",
  CNA = "CNA",
}
@Entity({ name: "jobs" })
export class JobsEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  job_role: string;

  @Column()
  job_type: EJOBTYPE;

  @Column({ type: "date" })
  start_date: Date;

  @Column({ type: "date", nullable: true })
  end_date: Date;

  @Column({ type: "time" })
  shift_start: string;

  @Column({ type: "time" })
  shift_end: string;

  @Column({ type: "decimal", precision: 5, scale: 2 })
  payment_rate: string;

  @Column({ type: Number })
  staff_needed: number;

  @Column({ type: "array" })
  certificates_needed: string[];

  @Column({ type: "boolean", default: false })
  is_urgent: boolean;
  
  @Column({ type: "text" })
  description: string;

  @Column({ type: "boolean", default: false })
  is_filled: boolean;

  @Column()
  adult_home_id: string;

  @ManyToOne(() => AdultHome, (adult_home) => adult_home.jobs)
  @JoinColumn({ name: "adult_home_id" })
  adult_home: AdultHome;

  @OneToMany(() => JobApplications, (application) => application.job)
  JobApplications: JobApplications[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
