import React from "react";
import { Task } from "./Task";

export const Tasks = ({ inputText, taskList }) => {
  console.log(taskList);
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <Task task={task} />
        </div>
      ))}
    </div>
  );
};
