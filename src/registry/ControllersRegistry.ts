import { CoreControllersRegistry } from "@wrappid/service-core";
import * as modulesControllersRegistry from "../modules/modules.controllers.registry";

export const ControllersRegistry = {
  ...modulesControllersRegistry,
  ...CoreControllersRegistry,
};
