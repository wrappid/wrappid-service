import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Students extends Model {
  @Column
  studentName: string;

  @Column
  address: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
