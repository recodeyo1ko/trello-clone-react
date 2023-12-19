import React from "react";
import { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskCardButton from "./AddTaskCardButton";

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  return (
    <div className="taskCardsArea">
      {taskCardsList.map((taskCard, index) => (
        <TaskCard
          key={taskCard.id}
          index={index}
          taskCardsList={taskCardsList}
          setTaskCardsList={setTaskCardsList}
          taskCard={taskCard}
        />
      ))}
      <AddTaskCardButton />
    </div>
  );
};

export default TaskCards;
