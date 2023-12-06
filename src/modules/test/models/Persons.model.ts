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

export interface personsAttributes {
  id?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  photoUrl?: string;
  extraInfo?: object;
  height?: number;
  weight?: number;
  rating?: number;
  medicalId?: string;
  phoneVerified?: boolean;
  emailVerified?: boolean;
  isActive?: boolean;
  isVerified?: boolean;
  dob?: Date;
  gender?: string;
  profileId?: string;
  userInvitationToken?: string;
  website?: string;
  status?: string;
  deletedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  departmentId?: number;
  userId?: number;
  createdBy?: number;
  updatedBy?: number;
  deletedBy?: number;
  marritalStatus?: string;
  bloodGroup?: string;
}

// @ModelDecorator
@Table({
  tableName: "Persons",
  timestamps: false,
})
export class Persons
  extends Model<personsAttributes, personsAttributes>
  implements personsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('\"Persons_id_seq\"'::regclass)"),
  })
  @Index({
    name: "Persons_pkey",
    using: "btree",
    unique: true,
  })
  id?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  firstName?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  middleName?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  lastName?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  photoUrl?: string;

  @Column({
    allowNull: true,
    type: DataType.JSONB,
  })
  extraInfo?: object;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
  })
  height?: number;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
  })
  weight?: number;

  @Column({
    allowNull: true,
    type: DataType.DOUBLE,
  })
  rating?: number;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  medicalId?: string;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal("false"),
  })
  phoneVerified?: boolean;

  @Column({
    allowNull: true,
    type: DataType.BOOLEAN,
    defaultValue: Sequelize.literal("false"),
  })
  emailVerified?: boolean;

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
  isVerified?: boolean;

  @Column({
    allowNull: true,
    type: DataType.DATE(6),
    defaultValue: Sequelize.literal(
      "'2023-09-04 17:51:20.406'::timestamp without time zone"
    ),
  })
  dob?: Date;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  gender?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  profileId?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  userInvitationToken?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  website?: string;

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
  departmentId?: number;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
  })
  userId?: number;

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

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  marritalStatus?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(255),
    defaultValue: Sequelize.literal("''::character varying"),
  })
  bloodGroup?: string;
}
