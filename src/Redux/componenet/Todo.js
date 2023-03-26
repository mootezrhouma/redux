import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo , editTodo, toggleTodo} from '../Actions/TodoAction.js'


const ToDo = ({el}) => {
const [todoUpd , setTodoUpd]= useState (el)   

const dispatch = useDispatch ()
const removeTodo =() => {
    dispatch (deleteTodo(el.id))
}
const handlleToggle = () => {
    dispatch (toggleTodo(el.id))
}
const handlleEdit = () => {
    dispatch(editTodo(todoUpd) )
}
  return (
    <div className='Todo'>
    <hr></hr>
    <input type="checkbox" onClick={handlleToggle} />
    <h1 style={{TextDecoration : el.isDone ? "Line-through " : "none"}}> { el.description}</h1>
    <button onClick={removeTodo} > Delete</button><br></br>
    <input type="text" value={el.description } onChange ={(e)=> setTodoUpd ({...todoUpd ,description  : e.target.value})}/>
    <button onClick={handlleEdit}>Update</button>
    <hr></hr>



    </div>
  )
}

export default ToDo