import React, { createContext, useState } from "react";

export const ContextoBebidaSeleccionada = createContext();

export const BebidaSeleccionadaProvider = ({ children }) => {
	const [bebidaSeleccionada, setBebidaSeleccionada] = useState(null);

	return (
		<ContextoBebidaSeleccionada.Provider value={{ bebidaSeleccionada, setBebidaSeleccionada }}>
			{children}
		</ContextoBebidaSeleccionada.Provider>
	);
};
