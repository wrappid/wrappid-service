import { CoreMiddlewaresRegistry } from "@wrappid/service-core";
import * as modulesMiddlewaresRegistry from "../modules/modules.middlewares.registry";

const MiddlewaresRegistry = {
  ...modulesMiddlewaresRegistry,
  ...CoreMiddlewaresRegistry,
};
export { MiddlewaresRegistry };
