import React, { useContext, useState } from "react";
import { ContextoBebidaSeleccionada } from "../BebidaSeleccionadaContext";
import { ContextoOrden } from "../OrdenContexto";

const PersonalizacionBebidas = () => {
	const { bebidaSeleccionada } = useContext(ContextoBebidaSeleccionada);
	const { orden, addToOrder } = useContext(ContextoOrden);
	const [opcionesPersonalizacion, setOpcionesPersonalizacion] = useState({
		tamano: "Mediano", // Valor predeterminado
		tipoLeche: "entera",
		edulcorante: "azúcar",
	});

	const manejarCambioTamano = (evento) => {
		setOpcionesPersonalizacion({ ...opcionesPersonalizacion, tamano: evento.target.value });
	};

	const manejarCambioLeche = (evento) => {
		setOpcionesPersonalizacion({ ...opcionesPersonalizacion, tipoLeche: evento.target.value });
	};

	const manejarCambioEdulcorante = (evento) => {
		setOpcionesPersonalizacion({ ...opcionesPersonalizacion, edulcorante: evento.target.value });
	};

	const manejarAgregarOrden = () => {
		const bebidaConPersonalizacion = {
			...bebidaSeleccionada,
			opcionesPersonalizacion, // La estructura ya coincide
		};
		addToOrder(bebidaConPersonalizacion);
	};

	if (!bebidaSeleccionada) {
		return <div>Seleccione una bebida para personalizar.</div>;
	}

	return (
		<div className="personalizacion-bebidas">
			<h2>Personaliza tu bebida: {bebidaSeleccionada.nombre}</h2>

			<div className="info-bebida">
				<img
					src={bebidaSeleccionada.imagen}
					alt={bebidaSeleccionada.nombre}
					className="imagen-bebida"
				/>
				<h2>{bebidaSeleccionada.nombre}</h2>
				<p>Rating: {"★".repeat(bebidaSeleccionada.rating)}</p>
				<p>Precio: ${bebidaSeleccionada.precio}</p>

				{/* Selección de tamaño */}
				<div>
					<label htmlFor="tamano">Tamaño:</label>
					<select
						id="tamano"
						value={opcionesPersonalizacion.tamano}
						onChange={manejarCambioTamano}
					>
						{bebidaSeleccionada.tamanos.map((tamano) => (
							<option
								key={tamano}
								value={tamano}
							>
								{tamano}
							</option>
						))}
					</select>
				</div>

				{/* Selección de tipo de leche */}
				<div>
					<label htmlFor="tipoLeche">Tipo de leche:</label>
					<select
						id="tipoLeche"
						value={opcionesPersonalizacion.tipoLeche}
						onChange={manejarCambioLeche}
					>
						<option value="entera">Leche entera</option>
						<option value="deslactosada">Leche deslactosada</option>
						<option value="vegetal">Leche vegetal</option>
						<option value="soya">Leche de soya</option>
						<option value="nuez">Leche de nuez</option>
						<option value="light">Leche light</option>
						{/* otras opciones */}
					</select>
				</div>

				{/* Selección de edulcorante */}
				<div>
					<label htmlFor="edulcorante">Edulcorante:</label>
					<select
						id="edulcorante"
						value={opcionesPersonalizacion.edulcorante}
						onChange={manejarCambioEdulcorante}
					>
						<option value="azúcar">Azúcar</option>
						<option value="stevia">Stevia</option>
						<option value="sin azúcar">Sin azúcar</option>
						{/* otras opciones */}
					</select>
				</div>

				<button onClick={manejarAgregarOrden}>Añadir a la orden</button>

				{/* Estado actual de la orden */}
				<div>
					<h3>Orden actual:</h3>
					{orden.length > 0 ? (
						<ul>
							{orden.map((item, index) => (
								<li key={index}>
									{item.nombre} - {item.opcionesPersonalizacion.tamano},{item.opcionesPersonalizacion.tipoLeche},
									{item.opcionesPersonalizacion.edulcorante}
								</li>
							))}
						</ul>
					) : (
						<p>No hay bebidas en tu orden.</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default PersonalizacionBebidas;
