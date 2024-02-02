import { CoreFunctionsRegistry } from "@wrappid/service-core";
import * as modulesFunctionsRegistry from "../modules/modules.functions.registry";

export const FunctionsRegistry = {
  ...modulesFunctionsRegistry,
  ...CoreFunctionsRegistry,
};
