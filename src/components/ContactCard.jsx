import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/AppContext";
import { IoLocation, IoPhonePortrait, IoMail, IoTrash } from "react-icons/io5";
import { MdEdit } from "react-icons/md";



const ContactCard = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            { /* Renderizo condicionalmente mostrar los contactos si la lista  tiene agragados,
                 sino, indico un mensaje de lista vacía*/
                store.contacts.length > 0 ?
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
                                        <Link onClick={() => {
                                            actions.handleClickUpdate();
                                            actions.selectContact(index)
                                        }}
                                            to={`/editcontact/contact/${contact.id}`} type="button" className="btn btn-light">
                                            <MdEdit />
                                        </Link>
                                        <button onClick={() => {
                                            /* actions.handleClickDelete(); */ 
                                            actions.selectContact(index);
                                            actions.deleteContact() 
                                        }}
                                            type="button" className="btn btn-light">
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

/* PROXIMAMENTE AGREGAR VENTANA MODAL PARA CONFIRMAR SI DESEA ELIMINAR UN CONTACTO */
/* const Modal = () => {
    const { store, actions } = useContext(Context)

    return (
        <>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
 */

