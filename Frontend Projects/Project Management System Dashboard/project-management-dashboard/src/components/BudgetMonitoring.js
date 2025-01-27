import React, { useState } from 'react';
import './BudgetMonitoring.css';

const BudgetMonitoring = ({ initialBudgets }) => {
  const [budgets, setBudgets] = useState(initialBudgets || []);
  const [newBudget, setNewBudget] = useState({
    project: '',
    sales: '',
    budget: '',
    expenses: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBudget(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddBudget = (e) => {
    e.preventDefault();
    if (!newBudget.project.trim()) return;
    
    setBudgets(prev => [...prev, {
      ...newBudget,
      sales: Number(newBudget.sales),
      budget: Number(newBudget.budget),
      expenses: Number(newBudget.expenses)
    }]);
    
    setNewBudget({
      project: '',
      sales: '',
      budget: '',
      expenses: ''
    });
  };

  const handleDeleteBudget = (index) => {
    setBudgets(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="budget-monitoring">
      <h2 className="heading">Budget Monitoring</h2>
      
      <form onSubmit={handleAddBudget} className="add-budget-form">
        <input
          type="text"
          name="project"
          placeholder="Project Name"
          value={newBudget.project}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="sales"
          placeholder="Total Sales"
          value={newBudget.sales}
          onChange={handleInputChange}
          min="0"
          required
        />
        <input
          type="number"
          name="budget"
          placeholder="Budget"
          value={newBudget.budget}
          onChange={handleInputChange}
          min="0"
          required
        />
        <input
          type="number"
          name="expenses"
          placeholder="Expenses"
          value={newBudget.expenses}
          onChange={handleInputChange}
          min="0"
          required
        />
        <button type="submit" className="add-button">
          <span>+ Add Budget</span>
        </button>
      </form>

      <div className="budget-list">
        {budgets.map((budget, index) => (
          <div key={index} className="budget-card">
            <button 
              className="delete-btn"
              onClick={() => handleDeleteBudget(index)}
            >
              ×
            </button>
            <h3 className="project-name">{budget.project}</h3>
            <div className="budget-details">
              <p>
                <strong>Total Sales:</strong> ${budget.sales.toLocaleString()}
              </p>
              <p>
                <strong>Budget:</strong> ${budget.budget.toLocaleString()}
              </p>
              <p>
                <strong>Expenses:</strong> ${budget.expenses.toLocaleString()}
              </p>
            </div>
            <div className="budget-status">
              {budget.expenses > budget.budget ? (
                <span className="status over-budget">Over Budget</span>
              ) : (
                <span className="status within-budget">Within Budget</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetMonitoring;