
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
                id: ''
            },

            host: 'https://playground.4geeks.com',

            buttonAdd: false,

            buttonUpdate: false
        },

        actions: {
            /* Las funciones handleClickAdd y handleClickUpdate setean las propiedades del store buttonAdd y buttonUpdate
               a true cuando se presionan los botones editar o agregar contacto para ejecutar renderizado condicional en 
               las funciones que realizan las peticiones POST O PUT dentro del componente formulario */
            handleClickAdd: ()=>{
                setStore({ buttonAdd: true })
            },

            handleClickUpdate: ()=>{
                setStore({ buttonUpdate: true })
            },

            handleClickBack: ()=>{
                setStore({
                    buttonAdd: false,
                    buttonUpdate: false,
                })
            },

            getInfoContact: (index) => { 
                /* Muestra la info de un solo contacto dentro un formulario para poder editarla.
                   Está función es utilizada en el componente ContactCard de cada conatcto.Esta Función se ejecuta al presionar 
                   <boton de editar onClick={()=>getInfoContact(index)}>, pasando como argumento el index generado por
                   el map de este componente. */
                const { contacts }= getStore(); 
                let contact= contacts[index] /* esta variable no es la misma que se encuentra dentro del store */
                setStore({ contact })
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
                    getActions().cleanContact()
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

            updateContact: async (id) => {
                /* Recibe por parametro en la URL el ID al momento de hacer click en el botón editar de cada usuario 
                 poe medio del hook useParams declarado en la vista AddContact */
                try {
                    const { host, contact } = getStore();
                    const raw = JSON.stringify(contact)
                    const apiUrl = `${host}/contact/agendas/TheSoprano/contacts/${id}`
                    const options = {
                        method: 'PUT',
                        body: raw,
                        headers: {
                            "Content-Type": "Application/json"
                        }
                    }
                    const response = await fetch(apiUrl, options)
                    console.log('editado',response.status)
                    const data = await response.json()
                    console.log(data)
                    if(data){
                        alert('Actualizado')
                    }
                   
                } catch (error) {
                };
            },

            deleteContact: async ()=>{
                try{
                    const { host, contact }= getStore();
                    console.log('contacto:', contact)
                    const apiUrl= `${host}/contact/agendas/TheSoprano/contacts/${contact.id}`
                    const options= {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "Application/json"
                        }
                    }
                    const response= await fetch(apiUrl, options)
                    console.log('Respuesta borrar:', response.status)

                }catch(error){

                }
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
            },

            cleanContact(){
                setStore({
                    contact: {
                        name: '',
                        phone: '',
                        address: '',
                        email: ''
                    }
                })
            }
        }
    }
}

export default getStore










