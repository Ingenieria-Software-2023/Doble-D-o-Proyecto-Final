import React, { useContext, useState } from "react";
import { ContextoOrden } from "../OrdenContexto";
import { useNavigate } from "react-router-dom";
import "./VentanaRetroalimentacion.css";

const agruparBebidasPorNombre = (orden) => {
	const grupos = {};
	orden.forEach((item) => {
		if (!grupos[item.nombre]) {
			grupos[item.nombre] = {
				nombre: item.nombre,
				comentario: "",
				calificacion: 0,
			};
		}
	});
	return Object.values(grupos);
};

const VentanaRetroalimentacion = () => {
	const navigate = useNavigate();
	const { orden } = useContext(ContextoOrden);
	const [comentarios, setComentarios] = useState(agruparBebidasPorNombre(orden));

	const actualizarComentario = (nombre, comentario) => {
		setComentarios(comentarios.map((item) => (item.nombre === nombre ? { ...item, comentario } : item)));
	};

	const actualizarCalificacion = (nombre, calificacion) => {
		setComentarios(comentarios.map((item) => (item.nombre === nombre ? { ...item, calificacion } : item)));
	};

	const enviarCalificacion = () => {
		alert("Calificaciones enviadas con éxito");
		navigate("/"); // Redirige al menú principal
	};

	return (
		<div className="ventana-retroalimentacion">
			<h2>Retroalimentación de la Orden</h2>
			{comentarios.map((item, index) => (
				<div
					key={index}
					className="item-retroalimentacion"
				>
					<h3>{item.nombre}</h3>
					<textarea
						value={item.comentario}
						onChange={(e) => actualizarComentario(item.nombre, e.target.value)}
						placeholder="Escribe tu comentario aquí"
					/>
					<div className="estrellas">
						{[...Array(5)].map((_, i) => (
							<span
								key={i}
								className={item.calificacion > i ? "filled" : ""}
								onClick={() => actualizarCalificacion(item.nombre, i + 1)}
							>
								★
							</span>
						))}
					</div>
				</div>
			))}
			<button onClick={enviarCalificacion}>Enviar calificación</button>
		</div>
	);
};

export default VentanaRetroalimentacion;
