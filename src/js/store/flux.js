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
			initializeUser: () => {
				const username = "AngelCS94";
				const url = `https://playground.4geeks.com/contact/agendas/${username}`;
				
				fetch(url)
					.then(response => {
						if (response.status === 404) {
							// User does not exist, create the user
							return fetch(url, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify({ "slug": username })
							});
						} else if (!response.ok) {
							throw new Error(`HTTP error! status: ${response.status}`);
						}
						return response.json();
					})
					.then(data => {
						if (data && data.slug) {
							console.log("User initialized successfully");
						}
					})
					.catch(err => console.error(err));
			},
			getContacts: () => {
				const username = "AngelCS94";
				fetch(`https://playground.4geeks.com/contact/agendas/${username}/contacts`)
					.then(response => response.json())
					.then(data => setStore({ contacts: data.contacts }))
					.catch(err => console.error(err));
			},
			deleteContact: id => {
				const username = "AngelCS94";
				fetch(`https://playground.4geeks.com/contact/agendas/${username}/contacts/${id}`, {
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
					.catch(err => console.error(err));
			},
			editContact: (id, updatedContact) => {
				const username = "AngelCS94";
				fetch(`https://playground.4geeks.com/contact/agendas/${username}/contacts/${id}`, {
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
					.then(data => {
						const store = getStore();
						const updatedContacts = store.contacts.map(contact =>
							contact.id === parseInt(id) ? data : contact
						);
						setStore({ contacts: updatedContacts });
					})
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
