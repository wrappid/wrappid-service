// user.model.ts
import { ModelDecorator, ModelRegistry } from "@wrappid/service-core";
import { Table, Model, Column, HasMany, ModelCtor } from "sequelize-typescript";

@ModelDecorator
@Table({ tableName: "Users" })
export class User extends Model<User> {
  @Column
  name: string;

  // @HasMany(() => Post)
  // posts: Post[];

  static associate(): void {
    let modelPost = ModelRegistry.getClass("Post");
    let modelUser = ModelRegistry.getClass("User");
    (modelUser as ModelCtor).hasMany(modelPost as ModelCtor, {
      foreignKey: "authorId",
    }); //
    (modelPost as ModelCtor).belongsTo(modelUser as ModelCtor, {
      foreignKey: "authorId",
    });
  }
}
