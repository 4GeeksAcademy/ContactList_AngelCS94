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
			deleteContact: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/AngelCS94/contacts/${id}`, {
					method: "DELETE"
				})
				.then(response => {
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					const store = getStore();
					const updatedContacts = store.contacts.filter(contact => contact.id !== id);
					setStore({ contacts: updatedContacts });
				})
				.catch((err) => console.error(err));
			},
			editContact: (id, updatedContact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/AngelCS94/contacts/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(updatedContact)
				})
				.then(response => {
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					return response.json();
				})
				.then((data) => {
					const store = getStore();
					const updatedContacts = store.contacts.map(contact => 
						contact.id === parseInt(id) ? data : contact
					);
					setStore({ contacts: updatedContacts });
				})
				.catch((err) => console.error(err));
			}
		}
	};
};

export default getState;
