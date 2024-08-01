import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import Card from "../component/Card";
import { Context } from "../store/appContext";


export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Llama a getContacts cuando el componente se monta
        actions.getContacts();
    }, []); // El segundo argumento [] asegura que esto solo se ejecute una vez

    return (
        <div className="text-center">
            <Card />
        </div>
    );
};
