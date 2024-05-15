
/**
 *  getStore: () => {}, //funcion que devuelve el objeto store con cada uno de los atributos alli definidos, 
 *  getActions: () => {}, //funcion que devuelve el objeto actions con cada una de las funciones alli definidas,
 *  setStore: () => {} // funcion que recibe como argumento un objeto con cada uno de los atributos que se desea actulizar o asignar un valor 
 */
const getStore = ({ getStore, getActions, setStore }) => {
    return {
        store: { /* contiene propiedades contacts */
            contacts: [/* es un array de objetos con los contactos que retorna 
                        la API */
            ],

            contact: { /* es el obejeto es que se guarda en el store 
                        y luego  se envía en el body de la solicitud*/
                name: '',
                address: '',
                phone: '',
                email: '',
            },

            host: 'https://playground.4geeks.com',

            buttonAdd: false,

            buttonUpdate: false
        },

        actions: {
            handleClickAdd: async () => {
                setStore({ buttonAdd: true })
            },

            handleClickUpdate: async () => {
                setStore({ buttonUpdate: true })
            },

            handleClickBack: async () => {
                setStore({
                    buttonAdd: false,
                    buttonUpdate: false
                })
            },

            checkInputsComplets: async () => {
                /* valida que los inputs estén con info. Se pasa
                en el evento onClick del save botón condicionalmmente
                para poder hacer la solicitud POST */
                const { contact } = getStore();
                if (contact.name !== '' && contact.phone !== '' && contact.address !== '' && contact.email !== '') {
                    alert('Agregado')
                    getActions().addContact()
                } else { alert('Completar campos') }
            },
            
            addContact: async () => {
                try {
                    const { host, contact } = getStore();
                    const raw = JSON.stringify(contact)
                    const apiUrl = `${host}/contact/agendas/TheSoprano/contacts`
                    const options = {
                        method: 'POST',
                        body: raw,
                        headers: {
                            "Content-Type": "Application/json"
                        }
                    }
                    const response = await fetch(apiUrl, options)
                    console.log(response)
                    const data = await response.json()
                    console.log(data)
                    setStore({
                        contact: {
                            name: '',
                            phone: '',
                            address: '',
                            email: ''
                        }
                    })
                } catch (error) {

                }
                getActions().getAgendaContacts()

            },

            changeAddContact: (e) => {
                const { contact } = getStore();
                console.log('Tipo de datos', contact)
                const { name, value } = e.target
                contact[name] = value
                setStore({ contact: contact })
            },

            updateContact: async (contact_id) => {
                try {
                    const { host, contact } = getStore();
                    const raw = JSON.stringify(contact)
                    const apiUrl = `${host}/contact/agendas/TheSoprano/contacts/${contact_id}`
                    const options = {
                        method: 'PUT',
                        body: raw,
                        headers: {
                            "Content-Type": "Application/json"
                        }
                    }
                    const response = await fetch(apiUrl, options)
                    const data = await response.json()
                    console.log('Contacto actualizado', data)
                    if (data.response >= 200 && data.response <= 299) {
                        alert('Usuario actualizado')
                        setStore({
                            contact: {
                                name: '',
                                phone: '',
                                email: '',
                                address: ''
                            }
                        })
                    }
                } catch (error) {
                }
                getActions().getAgendaContacts()
            },

            createAgenda: async (name) => {
                try {
                    const { host } = getStore();
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
                    if (data.detail) {
                    /* Si la respuesta no es en el orden de los 200, accede a la propiedad 
                       detail para ver el mensaje de la API */
                        console.log(data.detail)
                    } else {
                        return data
                    }
                } catch (error) {

                }
            },

            getAgendaContacts: async () => {
                try {
                    const { host } = getStore();
                    const apiUrl = `${host}/contact/agendas/TheSoprano`
                    const response = await fetch(apiUrl)
                    console.log(response.status)
                    const data = await response.json()
                    console.log(data.contacts)/* Obtiene los contactos de la propiedad contatc de la API */
                    return setStore({ contacts: data.contacts })/* actualiza el store en la propiedad contacts con los datos de la proiedad contacts de la API*/
                } catch (error) {

                }
            }
        }
    }
}

export default getStore








