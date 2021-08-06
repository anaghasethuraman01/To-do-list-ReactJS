// to allow us to control the task input
import React, { useContext } from 'react';
import TaskInput from './TaskInput';
import ListTask from './ListTask';
import { GlobalContext } from './GlobalStore';
import {reactLocalStorage} from 'reactjs-localstorage';
const ShowTask = () => {
    //accessing trans (array of objects)
    const{ trans }= useContext(GlobalContext);
    reactLocalStorage.setObject('REACTPROJ4', trans);
    return (
        <div className='task-layout'>
           
           <div className='task-input'>
                <TaskInput/>
                {console.log('trans is',trans) }
           </div>
           <div>
               <ListTask/>
            </div>
           
        </div>
    )
}

export default ShowTask
