import React, { useContext } from "react";
import { ContextoBebidaSeleccionada } from "../BebidaSeleccionadaContext";

const PersonalizacionBebidas = () => {
	const { bebidaSeleccionada } = useContext(ContextoBebidaSeleccionada);

	if (!bebidaSeleccionada) {
		return <div>Seleccione una bebida para personalizar.</div>;
	}

	return (
		<div>
			<h2>Personaliza tu bebida: {bebidaSeleccionada.nombre}</h2>
			{/* Más lógica de personalización aquí */}
		</div>
	);
};

export default PersonalizacionBebidas;
