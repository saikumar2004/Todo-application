function TodoListCard({task,handlestatus,index,deleteTask}){
    console.log(task);
return(
    <div>
        <div className={task.isComplete?"card done":"card"}>
            <div className="content">
                <div className="header">{task.name}</div>
                <div className="des">{task.description}</div>
                </div>
                <div className="extra">
                    <div className="buttons">
                        <div className="ui-basic green button" onClick={()=>handlestatus(index,task.isComplete)}>{task.isComplete?"undo":"Mark as done"}</div>
                        <div className="ui-basic red button" onClick={()=>deleteTask(index)}>Delete</div>

                    </div>

                </div>
            
        </div>
    </div>
)
}
export default TodoListCard;