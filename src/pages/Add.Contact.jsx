import React, { useContext } from "react";
import { Context } from "../store/AppContext";
import { Link, useNavigate } from "react-router-dom";

/* El componente showFormulario muestra el formulario indicado para agregar
   un contacto en la agenda del usuario o actualizar un contacto. Cada formulario
   se muestra al hacer click en los botones Add new contact y edit y ejecutan por
   separado los respectivos fetch*/

const showFormulario = () => {
    const { store } = useContext(Context)

    return (
    
        <>  
            {/* buttonAdd y buttonUpdate son propiedades con valores boleanas en el store.
                Ambas tienen como valor inicial false. Estos valores son seteados en el store 
                a true por medio de las funciones handleClickAdd y handleClickUpdate. Ambas 
                funciones son llamadas por el evento onClick en los botones. De tal manera,
                en el renderizado condicional, muestra el formulario que corresponde a la 
                opción que elija el usuario.
                Las propiedades buttonAdd y buttonUpdate son seteadas nuevamente en el store
                a false por medio de la función handleClickBack. Esta función es llamada por 
                el evento onClick en Link or get back to contacts. De tal manera, permite que 
                en la vista AddContact aparezca un solo formulario*/}

            {
                store.buttonAdd && <FormularioAddContact />
            }

            {
                store.buttonUpdate && <FormularioUpdateContact />
            }
        </>
    )
}

export default showFormulario


const FormularioAddContact = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    return (
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
                <button onClick={() => { if (actions.checkInputsComplets()) navigate('/') }} className="btn btn-primary w-100" type="button">Save</button>
                <Link onClick={actions.handleClickBack} to='/' type="button" className="container d-flex justify-content-center">or get back to contacts</Link>
            </form>
        </>
    )
}


const FormularioUpdateContact = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    return (
        <>
            <div className="container d-flex justify-content-center">
                <h1>Edit contact</h1>
            </div>
            <form onSubmit={actions.updateContact} className='w-50 mx-auto my-5'>
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
                <button onClick={() => { if (actions.updateContact()) navigate('/') }} className="btn btn-primary w-100" type="button">Save</button>
                <Link onClick={actions.handleClickBack} to='/' type="button" className="container d-flex justify-content-center">or get back to contacts</Link>
            </form>
        </>
    )
}














