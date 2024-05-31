import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons'

const ListTask = ({
  task, 
  index, 
  removeTask,
  startEditTask,
  isEditing,
  editTaskTitle,
  setEditTaskTitle,
  updateTask,
  toggleTaskCompletion
}) => {
  return (
    <div className={`list-tasks ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type='text'
            value={editTaskTitle}
            onChange={(e) => setEditTaskTitle(e.target.value)}
          />
          <button onClick={() => updateTask(index, editTaskTitle)} className='save-btn'>SAVE</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleTaskCompletion(index)} className='task-title'>
            <FontAwesomeIcon icon={task.completed ? faCheckCircle : faCircle} />
            {task.title}
          </span>
          <button onClick={() => startEditTask(index)} className='edit-btn'>
          <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => removeTask(index)} className='delete-btn'>REMOVE</button>
        </>
      )}
    </div>
  )
}

export default ListTask