import React, { useState } from "react";
import { useUsuarixs } from "../UsuarixsContexto";
import { useNavigate } from "react-router-dom";

const CrearCuenta = () => {
	const [usuarix, setUsuarix] = useState("");
	const [contraseña, setContraseña] = useState("");
	const { agregarUsuarix } = useUsuarixs();
	const navigate = useNavigate();

	const manejarCreacion = (e) => {
		e.preventDefault();
		agregarUsuarix({ usuarix, contraseña });
		navigate("/");
	};

	return (
		<form onSubmit={manejarCreacion}>
			<label>
				Usuarix:
				<input
					value={usuarix}
					onChange={(e) => setUsuarix(e.target.value)}
				/>
			</label>
			<label>
				Contraseña:
				<input
					type="password"
					value={contraseña}
					onChange={(e) => setContraseña(e.target.value)}
				/>
			</label>
			<button type="submit">Crear cuenta</button>
		</form>
	);
};

export default CrearCuenta;
