import React, { createContext, useState, useContext } from "react";

const UsuarixsContexto = createContext();

// Datos iniciales de ejemplo, estos normalmente vendrían de una base de datos o API
const usuarixsIniciales = [
	{
		correo: "marielsgtzz@gmail.com",
		contraseña: "123Mariel:)",
	},
	{
		correo: "aslialejandra@gmail.com",
		contraseña: "12Asli:)",
	},
];

export const UsuarixsProvider = ({ children }) => {
	const [usuarixs, setUsuarixs] = useState(usuarixsIniciales);

	const agregarUsuarix = (nuevoUsuarix) => {
		setUsuarixs([...usuarixs, nuevoUsuarix]);
	};

	const validarUsuarix = ({ correo, contraseña }) => {
		return usuarixs.some((u) => u.correo === correo && u.contraseña === contraseña);
	};

	return <UsuarixsContexto.Provider value={{ agregarUsuarix, validarUsuarix }}>{children}</UsuarixsContexto.Provider>;
};

export const useUsuarixs = () => useContext(UsuarixsContexto);
