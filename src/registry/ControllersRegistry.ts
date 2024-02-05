import { CoreControllersRegistry } from "@wrappid/service-core";
import * as modulesControllersRegistry from "../modules/modules.controllers.registry";

const ControllersRegistry: any = {
  ...modulesControllersRegistry.default,
  ...CoreControllersRegistry,
};
export default ControllersRegistry;
