import { CoreControllersRegistry } from "@wrappid/service-core";
import * as modulesControllersRegistry from "../modules/modules.controllers.registry";

const ControllersRegistry: any = {
  ...modulesControllersRegistry,
  ...CoreControllersRegistry,
};
export { ControllersRegistry };
