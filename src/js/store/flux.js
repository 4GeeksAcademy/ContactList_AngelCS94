const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { 
			contacts: [],
			demo: [
				{
					"name": "AngelCS94",
           			 "phone": "555555555",
					"email": "efjbblewbf@gmail.com",
           			 "address": "tututuut",
            		"id": 28
				},
				]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getContacts: () => {
				//aqui vamos a hacer la peticion de la api a traves de un 'GET'
				fetch("https://playground.4geeks.com/contact/agendas/AngelCS94/contacts")
				.then((response)=>{return response.json()})
				.then((data)=>{setStore({contacts: data.contacts})})
				.catch((err)=>{err})
			},
			deleteContacts: () => {
				//Aqui vamos a meter el fetch para eliminar contactos
			},
			changeContacts: () => {
				//aqui va la API que modifica la informacion con el metodo 'PUT'
			}
		}
	};
};

export default getState;
