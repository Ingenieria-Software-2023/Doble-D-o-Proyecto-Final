import React, { useContext } from "react";
import "./CatalogoBebidas.css";
import { ContextoBebidas } from "../CatalogoBebidasContext";

const CatalogoBebidas = () => {
	const { bebidas } = useContext(ContextoBebidas);

	return (
		<div className="catalogo-bebidas">
			<table>
				<thead>
					<tr>
						<th>Imagen</th>
						<th>Nombre</th>
						<th>Tamaños Disponibles</th>
						<th>Precio</th>
						<th>Rating</th>
					</tr>
				</thead>
				<tbody>
					{bebidas.map((bebida) => (
						<tr key={bebida.id}>
							<td>
								<img
									src={bebida.imagen}
									alt={bebida.nombre}
									height="200px"
								/>
							</td>
							<td>{bebida.nombre}</td>
							<td>{bebida.tamanos.join(", ")}</td>
							<td>${bebida.precio}</td>
							<td>{"★".repeat(bebida.rating) + "☆".repeat(5 - bebida.rating)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CatalogoBebidas;
