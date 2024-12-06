const initialState = {
   tasks: [
     { id: 1, title: "Task 1", status: "todo",description:"Task description 1",dated:"2024-01-01",datef:"2024-02-01",name:"ali"},
     { id: 2, title: "Task 2", status: "inprogress",description:"Task description 2",dated:"2024-03-06",datef:"2024-04-01",name:"youness"},
     { id: 3, title: "Task 3", status: "done",description:"Task description 3",dated:"2024-01-01",datef:"2024-01-03",name:"ossama"},
     { id: 4, title: "Task 4", status: "inprogress",description:"Task description task description 4",datef:"2024-01-06",dated:"2024-01-12",name:"rida"},
   ],
 };
 
const TasksReducer = (state = initialState, action) => {
   switch(action.type){
      case "add":{
         return {...state,tasks:[...state.tasks,action.value]}
      };
      case "update":{
         return {...state,tasks:state.tasks.map((e)=>(
              e.id==action.value.id?action.value:e
         ))}
      };
      case "delete":{
         console.log("delete in reducer")
         return {...state,tasks:state.tasks.filter((e)=>(
              e.id!=action.value.id
         ))}
      };
      default: {
         return state;
       }
   }

 };
 export default TasksReducer;