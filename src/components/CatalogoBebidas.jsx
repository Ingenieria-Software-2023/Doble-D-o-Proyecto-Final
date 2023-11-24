import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CatalogoBebidas.css";
import { ContextoBebidas } from "../CatalogoBebidasContext";
import { ContextoBebidaSeleccionada } from "../BebidaSeleccionadaContext";
import logoCafe from "../imgs/cafeDuo.png";

const CatalogoBebidas = () => {
	const navigate = useNavigate();
	const { bebidas } = useContext(ContextoBebidas);
	const { setBebidaSeleccionada } = useContext(ContextoBebidaSeleccionada);

	const seleccionarBebida = (bebida) => {
		setBebidaSeleccionada(bebida);
		navigate("/personalizacion"); // Navega a la ruta de personalización
	};

	return (
		<div>
			<div className="encabezado-menu">
				<h2>Café Duo</h2>
				<img
					src={logoCafe}
					alt="logoCafe"
					className="logoDuo"
				/>
			</div>

			<div className="grid-container">
				{bebidas.map((bebida) => (
					<div
						key={bebida.id}
						className="grid-item"
						onClick={() => seleccionarBebida(bebida)}
					>
						<img
							src={bebida.imagen}
							alt={bebida.nombre}
							className="imagen-bebida"
						/>
						<div className="info-bebida">
							<h3>{bebida.nombre}</h3>
							<p>{"★".repeat(bebida.rating) + "☆".repeat(5 - bebida.rating)}</p>
							<p>${bebida.precio}</p>
						</div>
					</div>
				))}
			</div>
			<button
				className="botonPagoMenu"
				onClick={() => navigate("/pago")}
			>
				Ir a pagar
			</button>
		</div>
	);
};

export default CatalogoBebidas;
