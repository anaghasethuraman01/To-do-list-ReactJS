//donot deal with ui - function to deal with actions

// to control and manage state
//action to perform 

//to define hooks
const Reducer = (state,action) => {
   switch(action.type){
       case 'CREATE':
           //manipulate the object of the state 
           return{
               //not changing directly, but changing using an array to replace it
               //... - spread operator
               //keeping original array elements along
               // with new trans object (which is found in action.payload)
               //payload from caller

               //replacing trans with new array
               ...state,trans : [...state.trans,action.payload]
           }
        case 'UPDATE':{
            return{
                //replacing trans with action.payload
                //action.payload is temp
                //replacing state(trans) with temp
                ...state,trans :[...action.payload]
            }
        }
        case 'DELETE':{
            return{
                
                ...state,trans :state.trans.filter( tran => tran.id !==action.payload )
            }
        }
        default :
            return state;   
   }
    
}

export default Reducer
