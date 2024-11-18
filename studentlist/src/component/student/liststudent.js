import React from "react";
import Deletestudent from "./deletestudent";
import { GetAllCustomer } from "../service/service";
import Addstudent from "./addstudent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class Customerlist extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            Customerlist: [],
            isShowModal: false,
            isAddSuccess: false,
        }
    }
    
    componentDidMount() {
        console.log("------componentDidMount run--")
        this.setState((preState) => ({
            ...preState,
            Customerlist: [...GetAllCustomer()]
        }));
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isAddSuccess !== this.state.isAddSuccess) {
            this.setState((preState) => ({
                ...preState,
                Customerlist: [...GetAllCustomer()]
            }))
        }
    }

    handleAddSuccess() {
        this.setState((pre) => ({
            ...pre,
            isAddSuccess: true,
        }))
    }

    handleShowModal() {
        this.setState((preState) => (
            {
                ...preState,
                isShowModal: !preState.isShowModal
            }
        ))
    }

    render() {
        return (
            <>
                <Addstudent handleAddSuccess={this.handleAddSuccess.bind(this)}/>

                <table className={'table table-dark'}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.Customerlist.map((e, i) => (
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.phone}</td>
                            <td>{e.email}</td>
                            <td>
                                <button onClick={this.handleShowModal.bind(this)} className={'btn btn-sm btn-danger'}>Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Deletestudent handleShowModal={this.handleShowModal(this)} isShowModal={this.state.isShowModal}/>
            </>
        )
    }

}

export default Customerlist;