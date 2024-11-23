import React from 'react';
import AddTask from './components/AddTasks';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import './App.css';

const App = () => {
    return (
        <TaskProvider>
            <div className="app-container">
                <h1 className='app-name'>Task Tracker</h1>
                <AddTask />
                <TaskList />
            </div>
        </TaskProvider>
    );
};

export default App;
