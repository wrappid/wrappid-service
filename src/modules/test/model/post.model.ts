// post.model.ts
import {
  Table,
  Model,
  Column,
  ForeignKey,
  ModelCtor,
} from "sequelize-typescript";
import { ModelDecorator, ModelRegistry } from "@wrappid/service-core";

@ModelDecorator
@Table({ tableName: "Posts" })
export class Post extends Model<Post> {
  @Column
  title: string;

  @ForeignKey(() => ModelRegistry.getClass("Author") as ModelCtor)
  @Column
  authorId: number;

  static associate(): void {
    let modelPost: ModelCtor = <ModelCtor>ModelRegistry.getClass("Post");
    let modelAuthor: ModelCtor = <ModelCtor>ModelRegistry.getClass("Author");

    modelPost.belongsTo(modelAuthor, { foreignKey: "authorId" });
    modelAuthor.hasMany(modelPost, { foreignKey: "authorId" });
  }
}
