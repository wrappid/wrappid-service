import { CoreTasksRegistry } from "@wrappid/service-core";
import * as modulesTasksRegistry from "../modules/modules.tasks.registry";

export const TasksRegistry = {
  ...modulesTasksRegistry,
  ...CoreTasksRegistry,
};
