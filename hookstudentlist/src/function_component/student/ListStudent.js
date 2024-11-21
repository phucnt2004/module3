import React, { useState, useEffect } from "react";
import { GetAllStudent } from "../../service/service";
import AddStudent from "./AddStudent";
const ListComponent = ()=>{
    const [studentList,setStudentList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        setStudentList(()=>(
            [
                ...GetAllStudent()

            ]
        ))
    },[isLoading]);
    const handleIdLoading = () => {
        setIsLoading(prevState => !prevState)
    }


    return (
        <>
        {console.log("--------------render-------------")}
        <AddStudent handleIdLoading = {handleIdLoading}/>
        <table className="table table-dark"> 
            <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {studentList&&studentList.map((student,i) =>(
                    <tr key ={student.id}>
                        <td>{i+1}</td>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td><button className="'btn btn-sm btn-danger"></button></td>
                    </tr>
                    ))}
            </tbody>
        </table>
        </>
    );
}

export default ListComponent;