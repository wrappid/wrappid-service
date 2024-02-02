import { CoreMiddlewaresRegistry } from "@wrappid/service-core";
import * as modulesMiddlewaresRegistry from "../modules/modules.middlewares.registry";

export const MiddlewaresRegistry = {
  ...modulesMiddlewaresRegistry,
  ...CoreMiddlewaresRegistry,
};
