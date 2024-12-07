import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useState } from 'react';

function AddComponent (){

    const [product,setProduct] = useState ( {id: "", name: ""})
    const navigate = useNavigate();
    const handleSubmit = (value)=>{
        console.log(value);
        addNewProduct('/products');
        navigate('/products');
    }
    const handValidate = Yup.object({
        id: Yup.number().required('khong duoc de trong').min(1,'phai la so nguyen duong'),
        name: Yup.string().required('khong duoc de trong').matches(/^[A-Z][a-z]*$/)
    })
    return (
        <>
            <Formik initalvalues ={product} onSubmit ={handleSubmit} validationSchema = {handValidate}>
                <Form>
                    <div>
                        <label>ID: </label>
                        <Field type = "text" name = "id"/>
                        <ErrorMessage name ='id' style ={{color: "red"}} component ="div"/>
                    </div>

                    <div>
                        <label>Name :  </label>
                        <Field type = "text" name = "name"/>
                        <ErrorMessage name ='name'  style ={{color: "red"}} component="div"/>
                    </div>

                    <div>
                        <button type = "submit"> Save</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default AddComponent;