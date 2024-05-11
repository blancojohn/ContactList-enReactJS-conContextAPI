import React, { useContext } from "react";
import { Context } from "../store/AppContext";
import { Link } from "react-router-dom";


const AddContact= ()=>{
    const { store, actions }= useContext(Context)

    return(
        <>  
            <div className="container d-flex justify-content-center">
                <h1>Add new contact</h1>
            </div>
            <form onSubmit={actions.AddContact} className='w-50 mx-auto my-5'>
                <div className="mb-3">
                    <label htmlFor="full-name" className="form-label">Full name:</label>
                    <input className="form-control w-100" type="text" name="full-name" id="full-name" placeholder="Full name" value={store.contacts.name} /* onChange={actions.changeAddContact} */></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input className="form-control w-100" type="email" name="email" id="email" placeholder="Email" value={store.contacts.email} /* onChange={changeAddContact} */></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input className="form-control w-100" type="number" name="phone" id="phone" placeholder="Phone" value={store.contacts.phone}/*  onChange={changeAddContact} */></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input className="form-control w-100" type="text" name="address" id="address" placeholder="Address" value={store.contacts.address} /* onChange={changeAddContact} */></input>
                </div>
                <button type="button" className="btn btn-primary w-100">Save</button>
                <Link to='/' className="container d-flex justify-content-center">or get back to contacts</Link>
            </form>
        </>
    )
}

export default AddContact;




