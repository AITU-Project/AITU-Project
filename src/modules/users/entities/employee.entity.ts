import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Conclusion } from '../../judgement/entities/conclusion.entity';

import { User } from './user.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  iin: string;

  @Column()
  workplace: string;

  @OneToMany(() => Conclusion, (conclusion) => conclusion.createdBy)
  conclusions: Conclusion[];
}
