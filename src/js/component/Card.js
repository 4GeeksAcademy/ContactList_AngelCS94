import React from 'react'
import { useContext } from 'react'
import {Context} from "../store/appContext"
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Card = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-4">
			<h1>Contact List</h1>
			<div className="list-group">
				{store.contacts && store.contacts.length > 0 ? (
					store.contacts.map(contact => (
						<div key={contact.id} className="list-group-item list-group-item-action d-flex align-items-center">
							<img
								src="https://via.placeholder.com/80"
								alt={contact.name}
								className="rounded-circle mr-3"
								style={{ width: '80px', height: '80px' }}
							/>
							<div className="flex-grow-1">
								<h5 className="mb-1">{contact.name}</h5>
								<p className="mb-1"><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
								<p className="mb-1"><i className="fas fa-phone"></i> {contact.phone}</p>
								<p className="mb-1"><i className="fas fa-envelope"></i> {contact.email}</p>
							</div>
							<div className="d-flex justify-content-end">
								<Link to={`/edit/${contact.id}`} className="btn btn-outline-primary btn-sm mr-2">
									<i className="fas fa-pencil-alt"></i>
								</Link>
								<button className="btn btn-outline-danger btn-sm" onClick={() => actions.deleteContact(contact.id)}>
									<i className="fas fa-trash-alt"></i>
								</button>
							</div>
						</div>
					))
				) : (
					<div className="alert alert-info" role="alert">
						No contacts available.
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;