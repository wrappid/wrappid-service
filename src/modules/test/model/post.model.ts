import { ModelDecorator, ModelRegistry } from "@wrappid/service-core";
import {
  Table,
  Model,
  Column,
  ForeignKey,
  ModelCtor,
  BelongsTo,
} from "sequelize-typescript";

@ModelDecorator
@Table({ schema: "wrappid", tableName: "Posts" })
export class Post extends Model<Post> {
  @Column
  title: string;

  @ForeignKey(() => ModelRegistry.getClass("Author") as ModelCtor)
  @Column
  authorId: number;

  // @BelongsTo(() => ModelRegistry.getClass("Author") as ModelCtor)
  // author: <T extends Model>(arg0: ModelRegistry.getClass("Author"));

  static associate(): void {
    let modelPost: ModelCtor = <ModelCtor>ModelRegistry.getClass("Post");
    let modelAuthor: ModelCtor = <ModelCtor>ModelRegistry.getClass("Author");
    modelPost.belongsTo(modelAuthor, { foreignKey: "authorId" });
  }
}
