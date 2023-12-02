import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Students } from './students.model';

@Table
export class Users extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => Students)
  posts: Students[];
}
