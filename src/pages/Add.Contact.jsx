import React from "react";
import { Link } from "react-router-dom";


const AddContact= ()=>{
    return(
        <>  
            <div className="container d-flex justify-content-center">
                <h1>Add new contact</h1>
            </div>
            <form className='w-50 mx-auto my-5'>
                <div className="mb-3">
                    <label htmlFor="full-name" className="form-label">Full name:</label>
                    <input className="form-control w-100" type="text" placeholder="Full name"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input className="form-control w-100" type="email" placeholder="Email"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input className="form-control w-100" type="number" placeholder="Phone"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input className="form-control w-100" type="text" placeholder="Address"></input>
                </div>
            </form>
            <div>
                <Link to='/'>or get back to contacts</Link>
            </div>
        </>
    )
}

export default AddContact;



