import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextoOrden } from "../OrdenContexto";
import "./VentanaPago.css";

const VentanaPago = () => {
	const navigate = useNavigate();
	const { orden } = useContext(ContextoOrden); // Así obtienes `orden` del contexto

	const [metodoPago, setMetodoPago] = useState("");
	const [datosTarjeta, setDatosTarjeta] = useState({
		numeroTarjeta: "",
		fechaExpiracion: "",
		cvv: "",
	});
	const [cryptoSeleccionada, setCryptoSeleccionada] = useState("");

	const totalPagar = orden.reduce((total, item) => total + item.precio, 0);

	const handleChangeMetodoPago = (e) => {
		setMetodoPago(e.target.value);
	};

	const handleInputTarjeta = (e) => {
		const { name, value } = e.target;
		setDatosTarjeta((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handlePagar = () => {
		// Aquí colocarías la lógica de pago o redirección a otra página
		alert("Procesando pago...");
		// Redirección a retroalimentación
		window.location.href = "/retroalimentacion";
	};

	const esPagoValido = () => {
		if (metodoPago === "tarjeta") {
			return datosTarjeta.numeroTarjeta && datosTarjeta.fechaExpiracion && datosTarjeta.cvv;
		} else if (metodoPago === "crypto") {
			return cryptoSeleccionada;
		}
		return metodoPago !== "";
	};

	return (
		<div className="ventana-pago">
			{/* Resumen de la orden */}

			<div>
				<h2>Resumen de la Orden</h2>
				{orden.length > 0 ? (
					<ul>
						{orden.map((item, index) => (
							<li key={index}>
								{item.nombre} - {item.opcionesPersonalizacion.tamano}, {item.opcionesPersonalizacion.tipoLeche},{" "}
								{item.opcionesPersonalizacion.edulcorante}
								<br />
								Precio: ${item.precio}
							</li>
						))}
					</ul>
				) : (
					<p>No hay bebidas en tu pedido.</p>
				)}
			</div>
			<p>Total a Pagar: ${totalPagar}</p>

			{/* Selección del método de pago */}
			<select
				value={metodoPago}
				onChange={handleChangeMetodoPago}
			>
				<option value="">Selecciona un método de pago</option>
				<option value="tarjeta">Tarjeta</option>
				<option value="efectivo">Efectivo</option>
				<option value="crypto">Criptomonedas</option>
			</select>

			{/* Mensaje para pagos en efectivo */}
			{metodoPago === "efectivo" && <p>El repartidor no lleva más de $500 en cambio.</p>}

			{/* Formulario para pagos con tarjeta */}
			{metodoPago === "tarjeta" && (
				<div className="pagoTarjeta">
					<input
						name="numeroTarjeta"
						value={datosTarjeta.numeroTarjeta}
						onChange={handleInputTarjeta}
						placeholder="Número de Tarjeta"
					/>
					<input
						name="fechaExpiracion"
						value={datosTarjeta.fechaExpiracion}
						onChange={handleInputTarjeta}
						placeholder="Fecha de Expiración"
					/>
					<input
						name="cvv"
						value={datosTarjeta.cvv}
						onChange={handleInputTarjeta}
						placeholder="CVV"
					/>
				</div>
			)}

			{/* Formulario para pagos con criptomonedas */}
			{metodoPago === "crypto" && (
				<div>
					<select
						value={cryptoSeleccionada}
						onChange={(e) => setCryptoSeleccionada(e.target.value)}
					>
						<option value="">Selecciona una criptomoneda</option>
						<option value="bitcoin">Bitcoin</option>
						<option value="litecoin">Litecoin</option>
						<option value="solana">Solana</option>
						<option value="ethereum">Ethereum</option>
					</select>
					{cryptoSeleccionada && <p>Depositar a: {`3dvs9t45s34wet6b3dtg8${cryptoSeleccionada}`}</p>}
				</div>
			)}

			{/* Botón para realizar el pago */}
			<button
				style={{ backgroundColor: esPagoValido() ? "#4CAF50" : "#ccc" }}
				onClick={handlePagar}
				disabled={!esPagoValido()}
			>
				Pagar
			</button>

			<button
				className="botonMenu"
				onClick={() => navigate("/")}
			>
				Ir al menú
			</button>
		</div>
	);
};

export default VentanaPago;
