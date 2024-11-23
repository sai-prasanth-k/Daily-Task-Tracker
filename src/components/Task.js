import React, { useState } from 'react';

const Task = ({ task, updateTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleEditChange = (e) => {
        setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateTask(editedTask);
        setIsEditing(false);
    };

    return (
        <div className="task-card-container">
            {isEditing ? (
                <form className='edit-form' onSubmit={handleEditSubmit}>
                    <div className="edit-form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={editedTask.title}
                            onChange={handleEditChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            className="form-control"
                            name="description"
                            value={editedTask.description}
                            onChange={handleEditChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Due Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="dueDate"
                            value={editedTask.dueDate}
                            onChange={handleEditChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <select
                            className="form-control"
                            name="status"
                            value={editedTask.status}
                            onChange={handleEditChange}
                            required
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success">Save</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <div className="task-card">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                    <p className="card-text">Due Date: {task.dueDate}</p>
                    <p className="card-text">Status: {task.status}</p>
                    <div className='card-btn-container'>
                        <button className="card-btn" onClick={() => setIsEditing(true)}>Edit</button>
                        <button className="card-btn" onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Task;
