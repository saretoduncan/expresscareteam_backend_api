import { Caregiver } from "src/users/caregiver.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "caregiver-requirements" })
export class CaregiverRequirements {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ nullable: false })
  backgroundCheck: string;

  @Column({ nullable: false })
  firstAid_cpr: string;

  @Column({ nullable: false })
  figurePrint: string;

  @Column({ nullable: false })
  safetyOrientation: string;

  @Column({ nullable: false })
  tuberculosisStepDate: string;

  @Column({ nullable: true })
  longTermCare: string;

  @Column({ nullable: false })
  foodCard: string;

  @Column({ nullable: true })
  nurseDelegation: string;

  @Column({ nullable: true })
  dementiaSpecialist: string;

  @Column({ nullable: true })
  mentalHealthSpeciality: string;

  @Column({ nullable: true })
  administrationTrainingSpecialist: string;

  @Column({ nullable: true })
  continuingEducation: string;

  @Column({ nullable: true })
  developmentDisability: string;

  @Column({ nullable: true })
  diabetesSpecialtyTraining: string;

  @Column({ unique: true, nullable: false })
  caregiverId: string;
  @OneToOne(() => Caregiver, (caregiver) => caregiver.requirements,{cascade:['insert','update']})
  @JoinColumn({ name: "caregiverId" })
  caregiver: Caregiver;
}
