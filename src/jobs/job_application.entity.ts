import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { JobsEntity } from "./job.entity";
import { Caregiver } from "src/users/caregiver.entity";

export enum EAPPLICATIONSTATUS {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}
@Entity({ name: "job_applications" })
export class JobApplications {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  caregiver_id: string;
  @ManyToOne(() => Caregiver, (caregiver) => caregiver.JobApplications, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "caregiver_id" })
  caregiver: Caregiver;

  @Column()
  job_id: string;
  @ManyToOne(() => JobsEntity, (job) => job.JobApplications, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "job_id" })
  job: JobsEntity;

  @Column({
    type: "enum",
    enum: EAPPLICATIONSTATUS,
    default: EAPPLICATIONSTATUS.PENDING,
  })
  status: EAPPLICATIONSTATUS;
  @CreateDateColumn({ type: "timestamp" })
  appliedAt: Date;
  @Column({ type: "timestamp", nullable: true })
  acceptedAt: Date | null;

  @Column({ type: "timestamp", nullable: true })
  rejectedAt: Date | null;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
