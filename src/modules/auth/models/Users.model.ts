import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { Roles } from "./Roles.model";
import { ModelDecorator } from "@wrappid/service-core";

export interface usersAttributes {
  id?: number;
  email?: string;
  phone?: string;
  password?: string;
  availableTokens?: number;
  isActive?: boolean;
  firstLogin?: boolean;
  status?: string;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  roleId?: number;
  deletedBy?: number;
  createdBy?: number;
  updatedBy?: number;
}

// @ModelDecorator
@Table({
  tableName: "Users",
})
export class Users
  extends Model<usersAttributes, usersAttributes>
  implements usersAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('\"Users_id_seq\"'::regclass)"),
  })
  @Index({
    name: "Users_pkey",
    using: "btree",
    unique: true,
  })
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  email?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  phone?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  password?: string;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
    defaultValue: Sequelize.literal("'0'::double precision"),
  })
  availableTokens?: number;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal("true"),
  })
  isActive?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal("false"),
  })
  firstLogin?: boolean;

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
    type: DataType.INTEGER,
  })
  roleId?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  deletedBy?: number;

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
}
