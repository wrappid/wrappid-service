import { CoreValidationsRegistry } from "@wrappid/service-core";
import * as modulesValidationsRegistry from "../modules/modules.validations.registry";

const ValidationsRegistry = {
  ...modulesValidationsRegistry,
  ...CoreValidationsRegistry,
};
export default ValidationsRegistry;
