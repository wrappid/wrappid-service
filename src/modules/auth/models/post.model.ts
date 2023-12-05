import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "./user.model";
import { BaseModel, ModelDecorator } from "@wrappid/service-core";
import { Sequelize } from "sequelize";

@ModelDecorator
@Table({ tableName: "posts" })
export class Post extends Model<Post> implements BaseModel {
  associate(model: Model<any, any>, models: any): void {
    Post.belongsTo(models.User, { foreignKey: "userId" });
  }

  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  content: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.UUID, allowNull: false })
  userId: string;

  @BelongsTo(() => User)
  user: User;

  static associate(models: any) {
    this.belongsTo(models.User);
  }
}
