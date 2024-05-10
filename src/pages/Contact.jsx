import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";


const Contact = () => {
    return(
        <>
            <div className='container d-flex justify-content-center'>
                <h2>CONTACT LIST</h2>
            </div>
            <div className='contauner d-flex justify-content-end'>
                <Link className="btn btn-success" to="/addcontact">
                    Add New Contact
                </Link>
            </div>
            <ContactCard />
        </>
    )
}

export default Contact
