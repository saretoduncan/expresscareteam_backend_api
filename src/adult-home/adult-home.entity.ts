import { AdultHomeRepresentative } from "src/users/adult-home-representative.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @OneToMany(() => AdultHomeRepresentative, (rep) => rep.adultHome)
  reps: AdultHomeRepresentative[];
}
