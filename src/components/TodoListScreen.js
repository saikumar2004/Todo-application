import { useReducer } from "react";
import TodoListCard from "./TodoListCard";
import TodoListForm from "./TodoListForm";
import { ADD_TASK, DELETE_TASK, MARK_DONE, MARK_UNDONE } from "./TodoAction";
import TodoReducer from "./TodoReducer";

function TodoListScreen(){
    const[taskList,dispatch]=useReducer(TodoReducer,[]);
    function addItem(task){
          dispatch({type:ADD_TASK,payload:{task}})
    }
    function handlestatus(index,isComplete){
        dispatch({type:isComplete? MARK_UNDONE:MARK_DONE,payload:{index}})
    }

    return(
        <div>
            <h1 style={{textAlign:"center"}}>To Do Application</h1>
            <div>
            <TodoListForm onSubmit={(item)=>{addItem(item)}}/>
            </div>
            <section style={{padding:"1vh 0"}}>
                <div className="todocard">
                    {taskList.map((task,index)=>{
                        return <TodoListCard 
                        key={index} 
                        index={index} 
                        task={task} 
                        handlestatus={handlestatus}
                        deleteTask={(index)=>dispatch({type:DELETE_TASK,payload:{index}})}
                        />
                    })}
                </div>
            </section>
          
        </div>
    )

}
export default TodoListScreen;