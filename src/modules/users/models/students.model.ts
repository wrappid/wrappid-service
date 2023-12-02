import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Users } from './user.model';

@Table
export class Students extends Model {
  @Column
  studentName: string;

  @Column
  address: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @ForeignKey(() => Users)
  @Column
  userId: number;

  @BelongsTo(() => Users)
  user: Users;
}
