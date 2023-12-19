import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface TaskAddInputProps {
  inputText: string;
  setInputText: any;
  taskList: any;
  setTaskList: any;
}

const TaskAddInput: React.FC<TaskAddInputProps> = ({
  inputText,
  setInputText,
  taskList,
  setTaskList,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const taskId = uuidv4();
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    setTaskList([
      ...taskList,
      {
        id: taskId,
        text: inputText,
        draggableId: `task-${taskId}`,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
