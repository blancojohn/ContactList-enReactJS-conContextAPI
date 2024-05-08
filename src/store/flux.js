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
                    agenda_slug: 'The Soprano'
                }
            ],
            currentContact: null,
        },

        actions: {}
    }
}

export default getStore