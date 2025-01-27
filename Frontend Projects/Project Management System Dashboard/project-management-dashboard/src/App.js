import React from 'react';
import ProjectOverview from './components/ProjectOverview';
import TaskTracking from './components/TaskTracking';
import ProgressVisualization from './components/ProgressVisualization';
import BudgetMonitoring from './components/BudgetMonitoring';
import './App.css'; // Ensure this import is present

const App = () => {
  const projects = [
    { name: 'Project A', startDate: '2025-01-01', endDate: '2025-03-01', status: 'Ongoing' },
    { name: 'Project B', startDate: '2025-02-01', endDate: '2025-04-01', status: 'Planned' },
  ];

  const tasks = [
    { name: 'Task 1', description: 'Design UI', deadline: '2025-01-15', status: 'Completed' },
    { name: 'Task 2', description: 'Develop Backend', deadline: '2025-02-01', status: 'In Progress' },
  ];

  const progressData = [
    { name: 'Week 1', completion: 20 },
    { name: 'Week 2', completion: 40 },
    { name: 'Week 3', completion: 60 },
    { name: 'Week 4', completion: 80 },
  ];

  const budgets = [
    { project: 'Project A', sales: 50000, budget: 80000, expenses: 30000 },
    { project: 'Project B', sales: 30000, budget: 60000, expenses: 20000 },
  ];

  return (
    <div>
      {/* Full-Width Header */}
      <header className="dashboard-header">
        <h1>Project Management Dashboard</h1>
        {/* Optional Navigation */}
        <nav className="dashboard-nav">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#tasks">Tasks</a></li>
            <li><a href="#progress">Progress</a></li>
            <li><a href="#budget">Budget</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Container */}
      <div className="dashboard-container">
        <ProjectOverview projects={projects} />
        <TaskTracking tasks={tasks} />
        <ProgressVisualization progressData={progressData} />
        <BudgetMonitoring budgets={budgets} />
      </div>
    </div>
  );
};

export default App;
