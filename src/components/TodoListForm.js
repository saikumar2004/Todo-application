import {useState} from "react";
function TodoListForm(props){
    const [task,setTask]=useState({
        name:"",
        description:"",
    });
   
 function handlechange(e){
    setTask({...task,[e.target.name]:e.target.value})
   
 }


 return(
    <div>
         
         <form className="ui form" onSubmit={(e)=>{e.preventDefault()
            props.onSubmit(task);
            setTask({name:"",description:""})}}>
            <div className="field">
          <label>Task :</label>
          <input type="text" placeholder='Task' 
          value={task.name}
           name="name" 
           required
           onChange={handlechange}/>
        </div>
        <div className="field">
            <label>Task Description</label>
            <textarea rows="2" 
            required
            value={task.description} 
            placeholder="Task Description" 
            data-ms-editor="true" 
            name="description" 
            
            onChange={handlechange}></textarea>
        </div>
      <button type="submit">Add</button>
            </form>
    </div>
   
 )
}
export default TodoListForm;