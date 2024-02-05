import { CoreMiddlewaresRegistry } from "@wrappid/service-core";
import * as modulesMiddlewaresRegistry from "../modules/modules.middlewares.registry";

const MiddlewaresRegistry = {
  ...modulesMiddlewaresRegistry.default,
  ...CoreMiddlewaresRegistry,
};
export default MiddlewaresRegistry;
