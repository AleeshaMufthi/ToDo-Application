import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoApp from './components/Todo/TodoApp';
import ListTask from './components/Todo/ListTask';
import AddTask from './components/Todo/AddTask';




function App() {

  return (
    <div className='App'>

      {/* <Container>
      <Products />  //for the product detail page
      </Container> */}

     <TodoApp />  

    </div>        
  )
}

export default App
