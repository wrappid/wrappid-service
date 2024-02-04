import { CoreModelsRegistry } from "@wrappid/service-core";
import * as modulesModelsRegistry from "../modules/modules.models.registry";

const ModelsRegistry = {
  ...modulesModelsRegistry,
  ...CoreModelsRegistry,
};
export { ModelsRegistry };
