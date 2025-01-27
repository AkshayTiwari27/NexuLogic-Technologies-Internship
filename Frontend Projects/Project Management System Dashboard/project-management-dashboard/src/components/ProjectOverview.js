import React, { useState } from 'react';
import './ProjectOverview.css'; // Import the CSS file

const ProjectOverview = ({ initialProjects = [] }) => {
  // Ensure initialProjects has a default empty array value
  const [projects, setProjects] = useState(initialProjects);
  const [newProject, setNewProject] = useState({
    name: '',
    startDate: '',
    endDate: '',
    status: 'Ongoing',
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingProject, setEditingProject] = useState(null);

  // Handle adding a new project
  const handleAddProject = () => {
    if (newProject.name && newProject.startDate && newProject.endDate) {
      setProjects([...projects, newProject]);
      setNewProject({ name: '', startDate: '', endDate: '', status: 'Ongoing' });
    } else {
      alert('Please fill out all fields before adding a project.');
    }
  };

  // Handle deleting a project
  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  // Handle starting the edit process
  const handleEditProject = (index) => {
    setEditingIndex(index);
    setEditingProject({ ...projects[index] });
  };

  // Handle saving the edited project
  const handleSaveEdit = () => {
    if (editingProject.name && editingProject.startDate && editingProject.endDate) {
      const updatedProjects = projects.map((project, index) =>
        index === editingIndex ? editingProject : project
      );
      setProjects(updatedProjects);
      setEditingIndex(null);
      setEditingProject(null);
    } else {
      alert('Please fill out all fields before saving changes.');
    }
  };

  // Handle input change during edit
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingProject({ ...editingProject, [name]: value });
  };

  return (
    <div className="project-overview">
      <h2 className="heading">Project Overview</h2>

      {/* New Project Form */}
      <div className="add-project-form">
        <input
          type="text"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          placeholder="Project Name"
        />
        <input
          type="date"
          value={newProject.startDate}
          onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
        />
        <input
          type="date"
          value={newProject.endDate}
          onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
        />
        <select
          value={newProject.status}
          onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
        >
          <option value="Ongoing">Ongoing</option>
          <option value="Completed">Completed</option>
          <option value="On Hold">On Hold</option>
        </select>
        <button onClick={handleAddProject}>Add Project</button>
      </div>

      {/* Project Table */}
      <table className="project-table">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects && projects.length > 0 ? (
            projects.map((project, index) => (
              <tr key={index} className="project-row">
                {editingIndex === index ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={editingProject.name}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="startDate"
                        value={editingProject.startDate}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        name="endDate"
                        value={editingProject.endDate}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <select
                        name="status"
                        value={editingProject.status}
                        onChange={handleInputChange}
                      >
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                        <option value="On Hold">On Hold</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={handleSaveEdit}>Save</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{project.name}</td>
                    <td>{project.startDate}</td>
                    <td>{project.endDate}</td>
                    <td>
                      <span className={`status ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </td>
                    <td>
                      <button onClick={() => handleEditProject(index)}>Edit</button>
                      <button onClick={() => handleDeleteProject(index)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No projects available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectOverview;
