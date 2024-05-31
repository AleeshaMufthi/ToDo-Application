import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'
import './TodoApp.css'

const TodoApp = () => {

  const [tasks, setTasks] = useState([])
  const [editTaskIndex, setEditTaskIndex] = useState(null)
  const [editTaskTitle, setEditTaskTitle] = useState('')
  const [error, setError] = useState('')

  useEffect(()=>{
    document.title = `You have ${tasks.length} pending task(s)`
  }, [tasks.length])

  const addTask = (title) => {

    if(title.trim() == ''){
      setError('Task Cannot be empty')
      return
    }

    if(tasks.some(task => task.title.toLowerCase() === title.toLowerCase())){
      setError('Task already exists')
      return
    }
    const newTask = [...tasks,{title}]
    setTasks(newTask)
    setError('')
  }

  const removeTask = (index) => {
    const newTask = [...tasks]
    newTask.splice(index,1)
    setTasks(newTask)
  }

  const startEditTask = (index) => {
    setEditTaskIndex(index)
    setEditTaskTitle(tasks[index].title)
  }

  const updateTask = (index, newTitle) => {

    if(newTitle.trim() === ''){
      setError('Task cannot be Empty')
      return
    }

    if(tasks.some((task, i) => task.title.toLowerCase() === newTitle.toLowerCase() && i !== index)){
      setError('Task already exists')
      return
    }

    const newTask = [...tasks]
    newTask[index].title = newTitle
    setTasks(newTask)
    setEditTaskIndex(null)
    setEditTaskTitle('')
    setError('')
  }

  const toggleTaskCompletion = (index) => {
    const newTask = [...tasks]
    newTask[index].completed = !newTask[index].completed
    setTasks(newTask)
  }


  return (
    <>
      <div className='todo-container'>
            <div className='header'>TO-DO APP</div>
            <div className='add-task'>
              <AddTask addTask={addTask}/>
            </div>
            {error && <div className='error'>{error}</div>}
            <div className='tasks'>
              {tasks.map((task, index)=>(
                    <ListTask 
                    task={task} 
                    removeTask={removeTask} 
                    index={index} 
                    key={index}
                    startEditTask={startEditTask}
                    isEditing={editTaskIndex === index}
                    editTaskTitle={editTaskTitle}
                    setEditTaskTitle={setEditTaskTitle}
                    updateTask={updateTask}
                    toggleTaskCompletion={toggleTaskCompletion}
                    />
              ))}
        
            </div>
      </div>
      <div className='task-count'>
            You have {tasks.length} pending task(s)
      </div>
    </>
  )
}

export default TodoApp
