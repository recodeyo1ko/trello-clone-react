import React from "react";
import { Task } from "./Task";

export const Tasks = ({ inputText, taskList, setTaskList }) => {
  console.log(taskList);
  return (
    <div>
      {taskList.map((task) => (
        <div>
          <Task task={task} taskList={taskList} setTaskList={setTaskList} />
        </div>
      ))}
    </div>
  );
};
