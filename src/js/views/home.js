import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import Card from "../component/Card";
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// Inicializar usuario y obtener contactos
		const initialize = async () => {
			await actions.initializeUser();
			actions.getContacts();
		};

		initialize();
	}, []); 

	return (
		<div className="text-center">
			<Card />
		</div>
	);
};