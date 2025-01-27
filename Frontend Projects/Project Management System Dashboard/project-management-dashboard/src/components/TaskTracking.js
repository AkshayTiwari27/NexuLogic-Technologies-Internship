import React, { useState } from 'react';
import './TaskTracking.css';

const TaskTracking = ({ tasks }) => {
  const [editableTasks, setEditableTasks] = useState(tasks);
  const [isEditing, setIsEditing] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState({
    name: '',
    description: '',
    deadline: '',
    status: 'Planned'
  });

  const handleChange = (index, field, value) => {
    const updatedTasks = [...editableTasks];
    updatedTasks[index][field] = value;
    setEditableTasks(updatedTasks);
  };

  const handleNewTaskChange = (field, value) => {
    setNewTask(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveNewTask = () => {
    if (!newTask.name.trim() || !newTask.deadline) return;
    setEditableTasks(prev => [...prev, newTask]);
    setIsAdding(false);
    setNewTask({ name: '', description: '', deadline: '', status: 'Planned' });
  };

  const handleEditClick = (index) => setIsEditing(index);
  const handleSaveClick = () => setIsEditing(null);

  // Delete functionality
  const handleDelete = (index) => {
    const updatedTasks = editableTasks.filter((_, i) => i !== index);
    setEditableTasks(updatedTasks);
  };

  return (
    <div className="task-tracking">
      <header className="header">
        <h2 className="heading">Task Tracker</h2>
        <div className="header-decoration"></div>
      </header>

      <div className="task-grid">
        {/* Add Task Card */}
        <div className={`task-card add-button-container ${isAdding ? 'editing' : ''}`}>
          {!isAdding ? (
            <button className="add-button" onClick={() => setIsAdding(true)}>
              + Add New Task
            </button>
          ) : (
            <div className="edit-form">
              <input
                type="text"
                value={newTask.name}
                onChange={(e) => handleNewTaskChange('name', e.target.value)}
                className="task-input"
                placeholder="Task Name"
              />
              <textarea
                value={newTask.description}
                onChange={(e) => handleNewTaskChange('description', e.target.value)}
                className="task-textarea"
                placeholder="Task Description"
              />
              <div className="input-group">
                <label>Deadline:</label>
                <input
                  type="date"
                  value={newTask.deadline}
                  onChange={(e) => handleNewTaskChange('deadline', e.target.value)}
                  className="task-input"
                />
              </div>
              <div className="input-group">
                <label>Status:</label>
                <select
                  value={newTask.status}
                  onChange={(e) => handleNewTaskChange('status', e.target.value)}
                  className="task-select"
                >
                  <option value="Completed">Completed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Planned">Planned</option>
                </select>
              </div>
              <div className="form-actions">
                <button onClick={handleSaveNewTask} className="save-button">
                  Save Task
                </button>
                <button
                  onClick={() => {
                    setIsAdding(false);
                    setNewTask({ name: '', description: '', deadline: '', status: 'Planned' });
                  }}
                  className="cancel-button"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Existing Tasks */}
        {editableTasks.map((task, index) => (
          <div key={index} className={`task-card ${isEditing === index ? 'editing' : ''}`}>
            {isEditing === index ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={task.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                  className="task-input"
                  placeholder="Task Name"
                />
                <textarea
                  value={task.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  className="task-textarea"
                  placeholder="Task Description"
                />
                <div className="input-group">
                  <label>Deadline:</label>
                  <input
                    type="date"
                    value={task.deadline}
                    onChange={(e) => handleChange(index, 'deadline', e.target.value)}
                    className="task-input"
                  />
                </div>
                <div className="input-group">
                  <label>Status:</label>
                  <select
                    value={task.status}
                    onChange={(e) => handleChange(index, 'status', e.target.value)}
                    className="task-select"
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Planned">Planned</option>
                  </select>
                </div>
                <div className="form-actions">
                  <button onClick={handleSaveClick} className="save-button">
                    Save Changes
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="task-header">
                  <h3 className="task-name">{task.name}</h3>
                  <span className={`status ${task.status.toLowerCase().replace(' ', '-')}`}>
                    {task.status}
                  </span>
                </div>
                <p className="task-desc">{task.description}</p>
                <div className="task-meta">
                  <div className="meta-item">
                    <span className="material-icons">Deadline</span>
                    <span>{new Date(task.deadline).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="task-actions">
                  <button onClick={() => handleEditClick(index)} className="edit-button">
                    Edit Task
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTracking;