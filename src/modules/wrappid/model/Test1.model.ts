
import { ModelDecorator } from '@wrappid/service-core';
import { Column, Model, Table } from 'sequelize-typescript';
@ModelDecorator
@Table
export class Test1 extends Model {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}


