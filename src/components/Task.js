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
                        <label className='edit-label'>Title</label>
                        <input
                            type="text"
                            className="edit-control"
                            name="title"
                            value={editedTask.title}
                            onChange={handleEditChange}
                            required
                        />
                    </div>
                    <div className="edit-group">
                        <label className='edit-label'>Description</label>
                        <textarea
                            className="edit-control"
                            name="description"
                            value={editedTask.description}
                            onChange={handleEditChange}
                            required
                        ></textarea>
                    </div>
                    <div className="edit-form-group">
                        <label className='edit-label'>Due Date</label>
                        <input
                            type="date"
                            className="edit-control"
                            name="dueDate"
                            value={editedTask.dueDate}
                            onChange={handleEditChange}
                            required
                        />
                    </div>
                    <div className="edit-form-group">
                        <label className='edit-label'>Status</label>
                        <select
                            className="edit-control"
                            name="status"
                            value={editedTask.status}
                            onChange={handleEditChange}
                            required
                        >
                            <option className="edit-control" value="Pending">Pending</option>
                            <option className="edit-control" value="In Progress">In Progress</option>
                            <option className="edit-control" value="Completed">Completed</option>
                        </select>
                    </div>
                    <button type="submit" className="edit-submit-btn">Save</button>
                    <button type="button" className="edit-submit-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                </form>
            ) : (
                <div className="task-card">
                    <h5 className="card-title">{task.title}</h5>
                    <hr />
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
