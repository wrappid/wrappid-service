import { BaseModel, ModelDecorator } from "@wrappid/service-core";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "./post.model";

@ModelDecorator
@Table({ tableName: "users" })
export class User extends Model<User> implements BaseModel {
  associate(model: Model<any, any>, models: any): void {
    // throw new Error("Method not implemented.");
  }

  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @HasMany(() => Post)
  posts: Post[];

  static associate(models: any) {
    this.hasMany(models.Post, { foreignKey: "userId", as: "User" });
  }
}
