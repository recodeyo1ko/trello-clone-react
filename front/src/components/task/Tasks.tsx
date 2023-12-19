import React from "react";
import Task from "./Task";

interface TasksProps {
  index: number;
  inputText: string;
  taskList: {
    id: number;
    text: string;
  }[];
  setTaskList: any;
}

const Tasks: React.FC<TasksProps> = ({
  index,
  inputText,
  taskList,
  setTaskList,
}) => {
  return (
    <div>
      {taskList.map((task: any, index: number) => (
        <div key={task.id}>
          <Task
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
