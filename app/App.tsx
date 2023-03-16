import React, { useMemo } from "react";

import { Task } from "./models/Task";
import { TaskRealmContext } from "./models";
import { TaskManager } from "./components/TaskManager";
import { tr } from "../util/nodejs-trace";

const { useQuery } = TaskRealmContext;

export const App = () => {
  tr("App");

  const result = useQuery(Task);
  const tasks = useMemo(() => result.sorted("createdAt"), [result]);

  // const tasks = useQuery(Task).sorted("createdAt");

  tasks.forEach((task) => {
    tr(task, "gray");
  });

  return <TaskManager tasks={tasks} />;
};
