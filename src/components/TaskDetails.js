import React, { useContext } from 'react'
import { GlobalContext } from './GlobalStore'
import {ImBin} from 'react-icons/im';
import {FaThumbsUp} from 'react-icons/fa';

const TaskDetails = ({tran}) => {
    const {updateTask} = useContext(GlobalContext);
    const {deleteTask} = useContext(GlobalContext);
    return (
        
        <div>
            
            <li className={tran.done?'done':'notdone'}>
                
                <button className='delete-btn'
                onClick={()=>deleteTask(tran.id)}><ImBin/></button>
                {tran.title}
                <button className='done-btn'
                onClick={()=>updateTask(tran.id)}><FaThumbsUp/></button>
            </li>
        </div>
    )
}

export default TaskDetails
