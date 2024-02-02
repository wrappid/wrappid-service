import { CoreModelsRegistry } from "@wrappid/service-core";
import * as modulesModelsRegistry from "../modules/modules.models.registry";

export const ModelsRegistry = {
  ...modulesModelsRegistry,
  ...CoreModelsRegistry,
};
