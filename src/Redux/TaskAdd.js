import { useState } from "react"
import "./Taskflow.css"

const TaskAdd=({f,S})=>{
    const[task,setTask]=useState({})
    const Change=(e)=>{
        setTask({...task,status: "todo",[e.target.name]:e.target.value})
    }
    const Send=(e)=>{
        e.preventDefault()
        console.log(task)
        f(task)
        S(false)
    }
    const Anuler=()=>{
        S(false)
    }
    return(
    <div className="action">
 <form onSubmit={Send}>
        <label>
        Id:
        </label>
        <input onChange={(e) => Change(e)} name="id" type="text" />
        <label>
        Title:
        </label>
        <input onChange={(e)=>{Change(e)}} name="title"  type="text"/>
        <label>
        Description:
        </label>
            <textarea onChange={(e)=>{Change(e)}} name="description"  type="text"></textarea>
        <label>
        Date Debut:
        </label>
            <input onChange={(e)=>{Change(e)}} name="dated"  type="text"/> 
        <label>
        Date Fin:
        </label>
            <input onChange={(e)=>{Change(e)}} name="datef" type="text"/>
        <label>
        Name:
        </label>
            <input onChange={(e)=>{Change(e)}} name="name" type="text"/>
        <div className="btns">
        <button type="submit" className="send">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>
        </button>
        <button onClick={Anuler} className="anuler">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ban" viewBox="0 0 16 16">
        <path d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0"/>
        </svg>
        </button>
        </div>
    </form>
    </div>)
}
export default TaskAdd;