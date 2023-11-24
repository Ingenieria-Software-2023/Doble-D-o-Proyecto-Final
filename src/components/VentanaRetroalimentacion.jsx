import React, { useContext, useState } from "react";
import { ContextoOrden } from "../OrdenContexto";
import { useNavigate } from "react-router-dom";
import "./VentanaRetroalimentacion.css"; // Asegúrate de crear este archivo CSS

const VentanaRetroalimentacion = () => {
	const navigate = useNavigate();
	const { orden } = useContext(ContextoOrden);
	const [comentarios, setComentarios] = useState(
		orden.map((item) => ({
			id: item.id,
			comentario: "",
			calificacion: 0,
		})),
	);

	const actualizarComentario = (id, comentario) => {
		setComentarios(comentarios.map((item) => (item.id === id ? { ...item, comentario } : item)));
	};

	const actualizarCalificacion = (id, calificacion) => {
		setComentarios(comentarios.map((item) => (item.id === id ? { ...item, calificacion } : item)));
	};

	const enviarCalificacion = () => {
		alert("Calificaciones enviadas con éxito");
		navigate("/menu"); // Redirigir al menú principal
	};

	return (
		<div className="ventana-retroalimentacion">
			<h2>Retroalimentación de la Orden</h2>
			{comentarios.map((item, index) => (
				<div
					key={index}
					className="item-retroalimentacion"
				>
					<h3>{orden[index].nombre}</h3>
					<textarea
						value={item.comentario}
						onChange={(e) => actualizarComentario(item.id, e.target.value)}
						placeholder="Escribe tu comentario aquí"
					/>
					<div className="estrellas">
						{[...Array(5)].map((_, i) => (
							<span
								key={i}
								className={item.calificacion > i ? "filled" : ""}
								onClick={() => actualizarCalificacion(item.id, i + 1)}
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
