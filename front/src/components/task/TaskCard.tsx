import React from "react";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";

const TaskCard = () => {
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <Tasks />
    </div>
  );
};

export default TaskCard;
