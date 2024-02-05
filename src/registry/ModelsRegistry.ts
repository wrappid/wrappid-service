import { CoreModelsRegistry } from "@wrappid/service-core";
import * as modulesModelsRegistry from "../modules/modules.models.registry";

const ModelsRegistry = {
  ...modulesModelsRegistry.default,
  ...CoreModelsRegistry,
};
export default ModelsRegistry;
