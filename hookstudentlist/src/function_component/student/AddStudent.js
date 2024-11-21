import React, { useState, useEffect } from "react";
import { GetAllStudent } from "../../service/service";
function AddStudent ({handIsLoading}){

    const [student, setStudent] = useState({})

    const handleOnchange =(event)=>{
        console.log(event.target.name)
        console.log(event.target.value)
        setStudent(prevState => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }

    const handleSave =() =>{
        console.log("------------add----------")
        AddStudent(student);
        console.log(GetAllStudent());
        handIsLoading();
    }
    return(
        <>
            <h2>Add Student</h2>
            <form>
                ID: 
                <input name ={"id"} onChange={(event)=>{
                    handleOnchange(event);
                }}/>   
                Name: 
                <input name ={"name"} onChange={(event)=>{
                    handleOnchange(event);
                }}/>   
                <button onClick={handleSave} type="button">Save</button>
            </form>
        </>
    );
}

export default AddStudent;