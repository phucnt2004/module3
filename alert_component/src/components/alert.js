import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


const Alert = ({text}) => {
    return (
        <div className={'alert alert-warning text-danger'} role={'alert'}>
            {text}
        </div>
    );
}
export default Alert;