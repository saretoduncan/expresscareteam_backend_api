import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToMany } from "typeorm";
import { User } from "./users.entity";
import { AdultHome } from "src/adult-home/adult-home.entity";
@Entity("adult_home_representatives")
export class AdultHomeRepresentative {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  jobTitle: string;

  @Column({ unique: true })
  userId: string;

  @Column()
  adultHomeId: string;

  @OneToOne(()=>User, user=>user.adultHomeRepresentative)
  @JoinColumn({name:'userId'})
  user:User;
  @ManyToMany(()=>AdultHome)
  @JoinColumn({name:'adultHomeId'})
  adultHome:AdultHome
}
