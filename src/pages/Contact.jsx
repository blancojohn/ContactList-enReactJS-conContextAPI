import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import { Context } from "../store/AppContext";


const Contact = () => {
    const { actions }= useContext(Context)
    useEffect(()=>{
        actions.cleanContact(); /* después de que se cargue el componente limpia el formulario que agrega un contacto */
        actions.getAgendaContacts()/* cada vez que cargue el componente */
    }, [])
    return(
        <>
            <div className='container d-flex justify-content-center'>
                <h2>CONTACT LIST</h2>
            </div>
            <div className='contauner d-flex justify-content-end'>
                <Link onClick={actions.handleClickAdd} className="btn btn-success" to="/addcontact">
                    Add New Contact
                </Link>
            </div>
            <ContactCard />
        </>
    )
}

export default Contact
