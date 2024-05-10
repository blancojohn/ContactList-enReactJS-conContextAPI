import { json } from "react-router-dom"

/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: { /* contiene propiedades contacts y currentcontacts. No estoy seguro de necesitar currentContact */
            contacts: [/* es un array de objetos porque cada contacto  contiene distinta info*/
                {
                    id: 1,
                    full_name: 'Tony Soprano',
                    address: 'Concepción',
                    phone: '+56 9 463 499 821',
                    email: 'john@gmail.com',
                    agenda_slug: 'TheSoprano',
                    host: 'https://playground.4geeks.com'
                }
            ]
        },

        actions: {
            handleSubmitAdd: async (e)=>{
                e.preventDefault()
            },

            createAgenda: async (name) => {
                try {
                    const { contacts: [{ host }] } = getStore();
                    const raw = JSON.stringify(name)
                    const apiUrl = `${host}/contact/agendas/TheSoprano`
                    const options = {
                        method: 'POST',
                        body: raw,
                        headers: {
                            "Content-Type": "Application/json"
                        }
                    }
                    const response = await fetch(apiUrl, options)
                    const data = await response.json()
                    if (data.detail) {/* Si la respuesta no es en el orden de los 200, accede a la propiedad detail para ver el mensaje de la API */
                        console.log(data.detail)
                    } else {
                        return data
                    }
                } catch (error) {

                }
            },

            getAgendaContacts: async () => {
                try {
                    /* Destructuración anidada de la propiedad contacts del store porque tiene 
                       un array de objetos como valor para utilizar el host concatenando. */
                    const { contacts: [{ host }] } = getStore();
                    const apiUrl = `${host}/contact/agendas/TheSoprano`
                    const response = await fetch(apiUrl)
                    console.log(response.status)
                    const data = await response.json()
                    console.log(data.contacts)
                    return setStore({contacts: data})/* actualiza el store en la propiedad contact */
                } catch (error) {

                }
            }
        }
    }
}

export default getStore




