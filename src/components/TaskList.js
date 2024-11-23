import React from 'react';
import Task from './Task';
import { useTaskContext } from '../context/TaskContext';

const TaskList = () => {
    const { tasks, updateTask, deleteTask } = useTaskContext();

    return (
        <>
            <h2 className='list-heading'>Todo Tasks</h2>
            <div className='tasklist-container'>
                
                {tasks.map(task => (
                    <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
                ))}
            </div>
        </>
    );
};

export default TaskList;
