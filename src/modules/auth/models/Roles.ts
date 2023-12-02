import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  HasMany,
  BelongsTo,
} from "sequelize-typescript";
import { Users } from "./Users.model";

export interface rolesAttributes {
  id?: number;
  role?: string;
  priority?: number;
  isActive?: boolean;
  status?: string;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
}

@Table({
  tableName: "Roles",
  timestamps: false,
})
export class Roles
  extends Model<rolesAttributes, rolesAttributes>
  implements rolesAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('\"Roles_id_seq\"'::regclass)"),
  })
  @Index({
    name: "Roles_pkey",
    using: "btree",
    unique: true,
  })

  @Column({})
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  role?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("0"),
  })
  priority?: number;

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
