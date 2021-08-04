// the data entry for task - form
import React,{useContext, useState} from 'react';

import {GlobalContext} from './GlobalStore';
import {v4 as uuidv4} from 'uuid';
const TaskInput = () => {
    const [taskTitle, setTaskTitle] = useState('');
    //using fn for creating a task from GlobalStore using hook -useContext
    const {createTask} = useContext(GlobalContext);
    const addTask =( e ) => {
        e.preventDefault();
        //invoke createTask
        //create object
        const newTran={
            id:uuidv4(),
            title:taskTitle,
            done:false
        }
        createTask(newTran);
        //clearing the title input field after each task

        setTaskTitle('');
        e.target.reset();//clear the field
    }
    return (
        <div>
            
            <form onSubmit={addTask}>
                <label>Task</label>
                <input type="text"  required onChange={(e)=>setTaskTitle(e.target.value)}/>
                <button type='submit' className='task-btn'>Add</button>
            </form>
            
        </div>
       
    )
    
}
  
export default TaskInput
   


