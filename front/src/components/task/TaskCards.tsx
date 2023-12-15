import React from "react";
import TaskCard from "./TaskCard";
import AddTaskCardButton from "./AddTaskCardButton";

const TaskCards = () => {
  return (
    <div className="taskCardsArea">
      <TaskCard />
      <AddTaskCardButton />
    </div>
  );
};

export default TaskCards;
