import React from 'react';

const TaskItem = ({ task, deleteTask, toggleComplete, setTaskToEdit }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => setTaskToEdit(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
