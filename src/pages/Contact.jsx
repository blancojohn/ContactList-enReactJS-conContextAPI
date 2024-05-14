import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import { Context } from "../store/AppContext";


const Contact = () => {
    const { store, actions }= useContext(Context)

    return(
        <>
            <div className='container d-flex justify-content-center'>
                <h2>CONTACT LIST</h2>
            </div>
            <div className='contauner d-flex justify-content-end'>
                <Link onClick={()=>{store.type_peticion}} className="btn btn-success" to="/addcontact">
                    Add New Contact
                </Link>
            </div>
            <ContactCard />
        </>
    )
}

export default Contact
