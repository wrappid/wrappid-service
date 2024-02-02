import { CoreValidationsRegistry } from "@wrappid/service-core";
import * as modulesValidationsRegistry from "../modules/modules.validations.registry";

export const ValidationsRegistry = {
  ...modulesValidationsRegistry,
  ...CoreValidationsRegistry,
};
