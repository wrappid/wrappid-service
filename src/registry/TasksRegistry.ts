import { CoreTasksRegistry } from "@wrappid/service-core";
import * as modulesTasksRegistry from "../modules/modules.tasks.registry";
const TasksRegistry = {
  ...modulesTasksRegistry,
  ...CoreTasksRegistry,
};
export { TasksRegistry };
