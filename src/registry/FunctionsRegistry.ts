import { CoreFunctionsRegistry } from "@wrappid/service-core";
import * as modulesFunctionsRegistry from "../modules/modules.functions.registry";

const FunctionsRegistry = {
  ...modulesFunctionsRegistry.default,
  ...CoreFunctionsRegistry,
};
export default FunctionsRegistry;
