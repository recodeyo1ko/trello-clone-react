import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface TaskProps {
  index: number;
  task: {
    id: number;
    text: string;
  };
  taskList: {
    id: number;
    text: string;
  }[];
  setTaskList: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        text: string;
      }[]
    >
  >;
}

const Task: React.FC<TaskProps> = ({ index, task, taskList, setTaskList }) => {
  const handleDelete = (id: number) => {
    setTaskList(taskList.filter((task: any) => task.id !== id));
  };
  return (
    <div className="taskBox">
      <p className="taskText">{task.text}</p>
      <button className="taskTrashButton" onClick={() => handleDelete(task.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Task;
