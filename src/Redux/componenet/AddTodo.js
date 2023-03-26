import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Actions/TodoAction.js'
import "./Todo.css"


const AddTodo = () => {
const dispatch = useDispatch()
const [input , setInput ] = useState ({
    description:""
})
 
const AddNewTodo = () => {
    dispatch (addTodo(input))
}

  return (
    <div  className="tasks">
    <input  className='write' type="text" placeholder='Write a new Task ...' onChange={(e)=>setInput({description : e.target.value})}/>
    <button onClick={AddNewTodo}>New Todo</button>



    </div>
  )
}

export default AddTodo