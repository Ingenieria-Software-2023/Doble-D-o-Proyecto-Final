import React, { useContext, useState } from "react";
import { ContextoBebidaSeleccionada } from "../BebidaSeleccionadaContext";
import { ContextoOrden } from "../OrdenContexto";
import "./PersonalizacionBebidas.css";
import { useNavigate } from "react-router-dom";

const PersonalizacionBebidas = () => {
	const navigate = useNavigate();

	const { bebidaSeleccionada } = useContext(ContextoBebidaSeleccionada);
	const { orden, addToOrder } = useContext(ContextoOrden);
	const [opcionesPersonalizacion, setOpcionesPersonalizacion] = useState({
		tamano: "Mediano",
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
			opcionesPersonalizacion,
		};
		addToOrder(bebidaConPersonalizacion);
	};

	return (
		<div className="personalizacion-bebidas">
			<div className="info-bebida-personalizacion">
				<img
					src={bebidaSeleccionada.imagen}
					alt={bebidaSeleccionada.nombre}
					className="imagen-bebida"
				/>
				<h2>{bebidaSeleccionada.nombre}</h2>
				<p>Rating: {"★".repeat(bebidaSeleccionada.rating)}</p>
				<p>Precio: ${bebidaSeleccionada.precio}</p>
			</div>
			<div className="formulario-orden-personalizacion">
				<h2>Personaliza tu bebida: {bebidaSeleccionada.nombre}</h2>

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
					</select>
				</div>

				{/* Selección de endulzante */}
				<div>
					<label htmlFor="edulcorante">Endulzante:</label>
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

				<button
					className="botonAgregarBebida"
					onClick={manejarAgregarOrden}
				>
					Añadir a la orden
				</button>
				<br></br>
				{/* Estado actual de la orden */}
				<div className="orden-actual-personalizacion">
					<h3>Orden actual:</h3>
					{orden.length > 0 ? (
						<ul>
							{orden.map((item, index) => (
								<li key={index}>
									{item.nombre} - {item.opcionesPersonalizacion.tamano}, {item.opcionesPersonalizacion.tipoLeche},{" "}
									{item.opcionesPersonalizacion.edulcorante}
								</li>
							))}
						</ul>
					) : (
						<p>No hay bebidas en tu orden.</p>
					)}
				</div>
				<button
					className="botonPago"
					onClick={() => navigate("/pago")}
				>
					Ir a pagar
				</button>
				<button
					className="botonMenu"
					onClick={() => navigate("/")}
				>
					Ir al menú
				</button>
			</div>
		</div>
	);
};

export default PersonalizacionBebidas;
