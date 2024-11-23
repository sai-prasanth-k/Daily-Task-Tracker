import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const AddTask = () => {
    const { addTask } = useTaskContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('Pending');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description, dueDate, status });
        setTitle('');
        setDescription('');
        setDueDate('');
        setStatus('Pending');
    };

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className="form-group">
                <label className='form-label'>Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    placeholder='Enter the title'
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label className='form-label'>Description</label>
                <textarea
                    className="form-control"
                    placeholder='Enter the description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <label className='form-label'>Due Date</label>
                <input
                    type="date"
                    className="form-control"
                    placeholder='Enter the Due Date'
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label className='form-label'>Status</label>
                <select
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <button type="submit" className="submit-btn">Add Task</button>
        </form>
    );
};

export default AddTask;
