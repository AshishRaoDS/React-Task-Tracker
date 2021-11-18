import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTask]=useState(
    [
        {
            id:1,
            text:"Meet Tanaya",
            day:"15th Jan 2022 at 9 am",
            reminder:true
        },
        {
            id:2,
            text:"Have breakfast with Tanaya",
            day:"15th Jan 2022 at 10:30 am",
            reminder:true
        },
        {
            id:3,
            text:"Go specs shopping with her",
            day:"16th Jan 2022 at 4 pm",
            reminder:false
        }
    ]
)

// Delete task
const onDelete=(id)=>{
 setTask(tasks.filter(task=>task.id !==id))
}

// Toggle reminder
const toggleReminder=(id)=>{
  setTask(tasks.map((task)=>
  task.id===id ? {...task,reminder:!task.reminder} :task))
}

// Add Task
const addTask = (task)=>{

  const id=Math.floor(Math.random()*1000)+1;
  const newTask={id,...task}
  setTask([newTask,...tasks])
}

  return (
    <div className="container">
     <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/> }
     {tasks.length ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={onDelete}/> : "No tasks left"}
    </div>
  );
}

export default App;
