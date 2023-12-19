import React from "react";
import { useState } from "react";
import TaskCardTitle from "./TaskCardTitle";
import Tasks from "./Tasks";
import TaskAddInput from "./TaskAddInput";

interface TaskCardProps {
  index: number;
  taskCardsList: {
    id: string;
    draggableId: string;
  }[];
  setTaskCardsList: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        draggableId: string;
      }[]
    >
  >;
  taskCard: {
    id: string;
    draggableId: string;
  };
}

const TaskCard: React.FC<TaskCardProps> = ({
  index,
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="taskCard">
      <TaskCardTitle />
      <TaskAddInput
        inputText={inputText}
        setInputText={setInputText}
        setTaskList={setTaskList}
        taskList={taskList}
      />
      <Tasks
        index={index}
        inputText={inputText}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
};

export default TaskCard;
