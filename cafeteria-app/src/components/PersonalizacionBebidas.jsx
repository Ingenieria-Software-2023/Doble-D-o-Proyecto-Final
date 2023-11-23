import React, { useContext, useState } from "react";
import { ContextoBebidaSeleccionada } from "../BebidaSeleccionadaContext";
import { OrdenProvider } from "../OrdenContexto";
import { ContextoOrden } from "../OrdenContexto";

const PersonalizacionBebidas = () => {
	const { bebidaSeleccionada } = useContext(ContextoBebidaSeleccionada);
	const { orden, addToOrder } = useContext(ContextoOrden);
	const [opcionesPersonalizacion, setOpcionesPersonalizacion] = useState({
		tipoLeche: "entera",
		edulcorante: "azúcar",
	});

	const manejarCambioLeche = (evento) => {
		setOpcionesPersonalizacion({ ...opcionesPersonalizacion, tipoLeche: evento.target.value });
	};

	const manejarCambioEdulcorante = (evento) => {
		setOpcionesPersonalizacion({ ...opcionesPersonalizacion, edulcorante: evento.target.value });
	};

	const manejarAgregarOrden = () => {
		const bebidaConPersonalizacion = {
			...bebidaSeleccionada,
			personalizacion: opcionesPersonalizacion, // Asegúrate de que la estructura coincida
		};
		addToOrder(bebidaConPersonalizacion);
	};

	if (!bebidaSeleccionada) {
		return <div>Seleccione una bebida para personalizar.</div>;
	}

	return (
		<div>
			<h2>Personaliza tu bebida: {bebidaSeleccionada?.nombre}</h2>
			{/* Ejemplo de selección de tipo de leche */}
			<select
				value={opcionesPersonalizacion.tipoLeche}
				onChange={manejarCambioLeche}
			>
				<option value="entera">Leche entera</option>
				<option value="deslactosada">Leche deslactosada</option>
				<option value="vegetal">Leche vegetal</option>
				{/* otras opciones */}
			</select>

			{/* Ejemplo de selección de edulcorantes */}
			<select
				value={opcionesPersonalizacion.edulcorante}
				onChange={manejarCambioEdulcorante}
			>
				<option value="azúcar">Azúcar</option>
				<option value="stevia">Stevia</option>
				{/* otras opciones */}
			</select>

			<button onClick={manejarAgregarOrden}>Añadir a la orden</button>

			<div>
				<h3>Orden actual:</h3>
				{orden.length > 0 ? (
					<ul>
						{orden.map((item, index) => (
							<li key={index}>
								{item.nombre} - {item.personalizacion.tipoLeche}, {item.personalizacion.edulcorante}
							</li>
						))}
					</ul>
				) : (
					<p>No hay bebidas en tu orden.</p>
				)}
			</div>
		</div>
	);
};

export default PersonalizacionBebidas;
