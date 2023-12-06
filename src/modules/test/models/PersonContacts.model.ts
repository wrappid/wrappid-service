import { ModelDecorator } from "@wrappid/service-core";
import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from "sequelize-typescript";

export interface personContactsAttributes {
  id?: number;
  type?: string;
  data?: string;
  verified?: boolean;
  primaryFlag?: boolean;
  notificationFlag?: boolean;
  isActive?: boolean;
  status?: string;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  personId?: number;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

// @ModelDecorator
@Table({
  tableName: "PersonContacts",
  timestamps: false,
})
export class PersonContacts
  extends Model<personContactsAttributes, personContactsAttributes>
  implements personContactsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('\"PersonContacts_id_seq\"'::regclass)"
    ),
  })
  @Index({
    name: "PersonContacts_pkey",
    using: "btree",
    unique: true,
  })
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  type?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  data?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal("false"),
  })
  verified?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal("false"),
  })
  primaryFlag?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal("false"),
  })
  notificationFlag?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal("true"),
  })
  isActive?: boolean;

  @Column({
    field: "_status",
    allowNull: true,
    type: DataType.STRING(255),
  })
  status?: string;

  @Column({
    allowNull: true,
    type: DataType.DATE(6),
  })
  deletedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.DATE,
  })
  createdAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.DATE,
  })
  updatedAt?: Date;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  personId?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  createdBy?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  updatedBy?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  deletedBy?: number;
}
