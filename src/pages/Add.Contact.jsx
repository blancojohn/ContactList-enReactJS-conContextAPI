import React, { useContext } from "react";
import { Context } from "../store/AppContext";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Form= ()=>{
    const { store, actions }= useContext(Context)
    const navigate= useNavigate()
    return(
        <>  
            <div className="container d-flex justify-content-center">
                <h1>Add new contact</h1>
            </div>
            <form onSubmit={actions.addContact} className='w-50 mx-auto my-5'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full name:</label>
                    <input className="form-control w-100" type="text" name="name" id="name" placeholder="Full name" value={store.contact.name} onChange={actions.changeAddContact}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input className="form-control w-100" type="text" name="email" id="email" placeholder="Email" value={store.contact.email} onChange={actions.changeAddContact}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input className="form-control w-100" type="number" name="phone" id="phone" placeholder="Phone" value={store.contact.phone} onChange={actions.changeAddContact}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input className="form-control w-100" type="text" name="address" id="address" placeholder="Address" value={store.contact.address} onChange={actions.changeAddContact}></input>
                </div>
                <button onClick={()=>{if(actions.checkInputsComplets()) navigate('/')}} className="btn btn-primary w-100" type="button">Save</button>
                <Link to='/' className="container d-flex justify-content-center">or get back to contacts</Link>
            </form>
        </>
    )
}

export default Form;




