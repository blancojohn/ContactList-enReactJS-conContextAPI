import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/AppContext";
import { IoLocation, IoPhonePortrait, IoMail, IoTrash } from "react-icons/io5";
import { MdEdit } from "react-icons/md";

/* Pretendo:
   Crear este componente para importarlo desde la vista Contact. 
   -La info recibida en los campos del formulario de la vista AddContact debo pasarla dinamicamente
   -a este componente por medio del estado global.  
   */
const ContactCard = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            { /* Renderizo condicionalmente mostrar los contactos si la lista  tiene agragados,
                 sino, indico un mensaje de lista vacía*/
                store.contacts.length > 0 ?
                /* Como la propiedad  */
                    store.contacts.map((contact, index) => {
                        return (
                            <div key={contact.id} className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-2">
                                        <img src="https://picsum.photos/id/129/200/200" className="img-fluid rounded-start"></img>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">{contact.name}</h5>
                                            <p className="card-text"><IoLocation />{contact.address}</p>
                                            <p className="card-text"><IoPhonePortrait />{contact.phone}</p>
                                            <p className="card-text"><IoMail />{contact.email}</p>
                                        </div>
                                    </div>
                                    <div className="container d-inline col-md-1">
                                        <Link onClick={()=>{actions.handleClickUpdate(); actions.getInfoContact(index)}} to={`/editcontact/contact/${contact.id}`} type="button" className="btn btn-light">
                                            <MdEdit />
                                        </Link>
                                        <button type="button" className="btn btn-light">
                                            <IoTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : (
                        <h3 className='text-center'>Lista de contactos vacía</h3>
                    )
            }
        </>
    )
}

export default ContactCard
                                                   
