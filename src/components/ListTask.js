import React,{useContext} from 'react';
import { GlobalContext } from './GlobalStore';
import TaskDetails from './TaskDetails';
//display task on screen
const ListTask = () => {
    const {trans}=useContext(GlobalContext);
    const total=trans.length; //find total no. of tasks in the list
    //find number of tasks done 
    const totalDone = trans.reduce((cnt,{done})=>done?cnt+1:cnt,0)//initialize cnt = 0 first
    
    return (
        
        <div>
            <h2>Task List</h2>
            <h4>Total tasks : {total} and tasks done :{totalDone}</h4>
            <ul className='list'>
                {/* map through objects */}
                {/* {} - for js objects */}
                {
                trans.map(tran=>(
                    <TaskDetails tran ={tran} key={tran.id} />
                ))
                }
            </ul>
        </div>
        
    )
}

export default ListTask
