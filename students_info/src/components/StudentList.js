import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class StudentList extends React.Component {
    render(){
        return(
            <>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>class</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((e,i) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.class}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}
export default StudentList;