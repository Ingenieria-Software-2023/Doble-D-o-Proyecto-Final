import React, { createContext, useState } from "react";

export const ContextoOrden = createContext();

export const OrdenProvider = ({ children }) => {
	const [orden, setOrden] = useState([]);

	const addToOrder = (bebida) => {
		setOrden([...orden, bebida]);
	};

	const removeFromOrder = (bebidaId) => {
		setOrden(orden.filter((item) => item.id !== bebidaId));
	};

	const clearOrder = () => {
		setOrden([]);
	};

	return (
		<ContextoOrden.Provider value={{ orden, addToOrder, removeFromOrder, clearOrder }}>
			{children}
		</ContextoOrden.Provider>
	);
};
