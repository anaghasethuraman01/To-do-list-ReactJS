//keep and manage state - to share data among sibling

import React,{ createContext,useReducer } from 'react';
import Reducer from './Reducer';
import {reactLocalStorage} from 'reactjs-localstorage';
//get the object and test it(line 13)
const localcheck = reactLocalStorage.getObject('REACTPROJ4');
//define structure - structure is an object with one key-value pair
const initialState ={
    trans:[]
}
//check if object is empty,if not empty save data into it
if(Object.entries(localcheck).length>0){
    initialState.trans=localcheck;
}
//export  : to make it available for the components who want to use it
//createContext - creating initial state
export const GlobalContext = createContext(initialState);
 //whoever refer this later using useContext 
//they can access data and function
//All children can use global context -whatever in value ={} is available to children
//export in fn level
export const GlobalStore = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, initialState)
    //to save state on submit
    const createTask=(tran)=>{
        console.log('in create ',tran);
        //insert into state object
        dispatch({
            //dispatch() - fn that accept an object
            //object has two fields - type(action) ,payload
            type : 'CREATE',
            payload : tran
            //this dispatch invoke Reducer and  check action type and replace trans property
            //in Reducer - new task object will be inserted to array and task get added 
        })
    }
    //to update status of task
    const updateTask = ( id ) =>{
        //all objects grabbed and input into temp
        const temp = [...state.trans];//copying into temp
        //get index if id matches
        const i = temp.findIndex(tran=>tran.id === id)
        //checking status
        const status = temp[i].done;
        //update status, if false then set it to true and vise versa
        temp[i].done=status?false:true;
        dispatch({
            type : 'UPDATE',
            payload : temp
            //these are sent to Reducer
        })
    }
    //to delete task based on id
    const deleteTask=(id)=>{
        //using filter 
        dispatch({
            type:'DELETE',
            payload :id
        })
    }
    return (
        //children need task objects rather than states
        //state.trans -have array of objects
        //GlobalContext.Provider - Declaration
        <GlobalContext.Provider value={ {trans : state.trans,createTask ,updateTask,deleteTask} }>
            {/* //createTask is a call back function in a more controlled  manner
            and whatever given in value will be available to children*/}
            {children}
        </GlobalContext.Provider>
    )
}

