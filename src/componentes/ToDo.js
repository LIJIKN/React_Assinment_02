import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Todo.css'

const ToDo = () => {

var [Todo, setTodo] = useState([])
var [Input, setInput] = useState('')

  return (
    <div >
         <div className='box'>
                 <div className='header'>
                    <h1>ToDo List</h1>
                 </div>
            <div className='input'>
               <TextField value={Input} onChange={ (e)=>{setInput(e.target.value)}} id='standard-basic' label=' 🖊️ Add item..' variant='standard' /><br></br> 
                <br></br><br></br>
               <Button variant='outlined' size="large" onClick={ ()=> setTodo([...Todo,Input])}>Add</Button>  
        <div className='list'> 
                <ol>
                <u><h3>Todos</h3></u>
                   {Todo.map((item) => {
                     return(
                     <li>{item}</li>) 
                   })}
                </ol>
        </div>     
            </div>
        </div>
    </div>
)}

export default ToDo
