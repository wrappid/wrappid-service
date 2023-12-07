// post.model.ts
import {
  Table,
  Model,
  Column,
  ForeignKey,
  ModelCtor,
} from "sequelize-typescript";
import { User } from "./user.model";
import { ModelDecorator, ModelRegistry } from "@wrappid/service-core";

@ModelDecorator
@Table({ tableName: "Posts" })
export class Post extends Model<Post> {
  @Column
  title: string;

  @Column
  authorId: number;

  // @BelongsTo(() => User)
  // user: User;

  // static associate(): void {
  //   let model = ModelRegistry.getClass("User");
  //   Post.belongsTo(model as ModelCtor, { foreignKey: "authorId" });
  // }
}
