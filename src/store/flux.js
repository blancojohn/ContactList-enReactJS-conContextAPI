import { json } from "react-router-dom"

/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getStore = (/* { getStore, getActions, setStore } */) => {
    return {
        store: { /* contiene propiedades contacts y currentcontacts. No estoy seguro de necesitar currentContact */
            contacts: [/* es un array de objetos porque cada contacto  contiene distinta info*/
                {   
                    id: 1,
                    full_name: 'Tony Soprano',
                    adreess: 'Concepción',
                    phone: '+56 9 463 499 821',
                    email: 'john@gmail.com',
                    agenda_slug: 'TheSoprano',
                    host: 'https://playground.4geeks.com'
                }
            ],
            currentContact: null,
        },

        actions: {
            createAgenda: async (name)=>{
                try{
                    const raw= JSON.stringify(name)
                    const apiUrl= 'https://playground.4geeks.com/contact/agendas/TheSoprano'
                    const options={
                        method: 'POST',
                        body: raw,
                        headers: {
                            "Content-Type": "Application/json"
                        }
                    }
                    const response= await fetch(apiUrl, options)
                    const data= await response.json()
                    if(data.detail){
                        console.log(data.detail)
                    }
                    return data
                }catch(detail){
                    
                }
            },

            getAgendaContacts: async ()=>{
                try{
                    const apiUrl= 'https://playground.4geeks.com/contact/agendas/TheSoprano/contacts'
                    const response= await fetch(apiUrl)
                    console.log(response.status)
                    const data= await response.json()
                    if(data){
                        console.log(data.contacts)
                        return data
                    }else{

                    }
                }catch(detail){
                    console.log(detail)
                }
            }
        }
    }
}

export default getStore

