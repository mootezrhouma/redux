import React from 'react'
import Todo from './Todo'


const TodoList = ({alltodos}) => {
  return (
    <div>
        {
            alltodos.map((el ,i)  => <Todo el={el} key={i} />)
        }
    </div>
  )
}

export default TodoList