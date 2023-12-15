import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = () => {
  return (
    <div className="taskBox">
      <p>タイトル</p>
      <button className="taskTrashButton">
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Task;
