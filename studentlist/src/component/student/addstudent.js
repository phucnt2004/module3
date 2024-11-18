import React from 'react';
import { AddNewCustomer } from '../service/service';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
class Addstudent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            customer: {
                name: "",
                phone: "",
                email: ""
            }
        }
    }

    handleSave(){
        // call api them
        AddNewCustomer(this.state.customer);
        this.props.handleAddSuccess();
    }
    handleOnchange(event){
        
        this.setState((preState)=>({
            ...preState,
            customer:{
                ...preState.customer,
                [event.target.name]: event.target.value,
            }
        }))
    }
    render() {
        return (
            <>
                <form>
                    name: 
                        <input name={'name'}  onChange = {(event)=>{
                            this.handleOnchange(event)
                        }}/>
                    phone: 
                        <input name={'phone'}  onChange = {(event)=>{
                            this.handleOnchange(event)
                        }}/>
                    email: 
                        <input name={'email'}  onChange = {(event)=>{
                            this.handleOnchange(event)
                        }}/>
                    <button onClick={this.handleSave.bind(this)} type="button">save</button>
                </form>
            </>
        );
    }
}

export default Addstudent;