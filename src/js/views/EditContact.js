import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const navigate = useNavigate();
	const [contact, setContact] = useState({
		name: '',
		phone: '',
		email: '',
		address: ''
	});

	useEffect(() => {
		const existingContact = store.contacts.find(contact => contact.id === parseInt(id));
		if (existingContact) {
			setContact(existingContact);
		}
	}, [id, store.contacts]);

	const handleChange = (e) => {
		setContact({
			...contact,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		actions.editContact(id, contact);
		navigate('/');
	};

	return (
		<div className="container">
			<h1>Edit Contact</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Name</label>
					<input type="text" className="form-control" name="name" value={contact.name} onChange={handleChange} required />
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input type="text" className="form-control" name="phone" value={contact.phone} onChange={handleChange} required />
				</div>
				<div className="form-group">
					<label>Email</label>
					<input type="email" className="form-control" name="email" value={contact.email} onChange={handleChange} required />
				</div>
				<div className="form-group">
					<label>Address</label>
					<input type="text" className="form-control" name="address" value={contact.address} onChange={handleChange} required />
				</div>
				<button type="submit" className="btn btn-primary">Save</button>
			</form>
		</div>
	);
};

export default EditContact;
