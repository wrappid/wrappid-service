import { ClassRegistry, ModelDecorator } from "@wrappid/service-core";
import { join } from "path";

// const DEFAULT_REGISTRY_FILE_LOCATIONS = [path.join(__dirname, "../commands")];
const DEFAULT_REGISTRY_FILE_LOCATIONS = [join(__dirname, "../")];
const DEFAULT_REGISTRY_FILE_SUFFIX = ".model.js";
const DEFAULT_DECORATOR_NAMES = [ModelDecorator.name];

export class ModelRegistry extends ClassRegistry {
  static initialize(filePath: string[]) {
    // ClassRegistry.registryFolderPaths =
    // filePath || DEFAULT_REGISTRY_FILE_LOCATIONS;
    ClassRegistry.decoratorNames = DEFAULT_DECORATOR_NAMES;
    ClassRegistry.decoratorFileSuffix = DEFAULT_REGISTRY_FILE_SUFFIX;
    ClassRegistry.initialize(filePath);
  }
}
