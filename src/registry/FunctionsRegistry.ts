import { CoreFunctionsRegistry } from "@wrappid/service-core";
import * as modulesFunctionsRegistry from "../modules/modules.functions.registry";

const FunctionsRegistry = {
  ...modulesFunctionsRegistry,
  ...CoreFunctionsRegistry,
};
export { FunctionsRegistry };
