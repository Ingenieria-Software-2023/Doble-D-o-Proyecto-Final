import React, { createContext, useState } from "react";

// Datos de ejemplo (mock data)
const bebidas = [
	{
		id: 1,
		nombre: "Café Americano",
		tamanos: ["Pequeño", "Mediano", "Grande"],
		precio: 50,
		rating: 3,
		imagen: require("./imgs/americano.png"),
		infoNutricional: require(":/imgs/cafe_americano.jpeg")
	},
	{
		id: 2,
		nombre: "Chocolate con canela",
		tamanos: ["Pequeño", "Mediano", "Grande"],
		precio: 78,
		rating: 4,
		imagen: require("./imgs/chocolateCanela.png"),
		infoNutricional: require(":/imgs/chocolate_con_canela.jpeg")
	},
	{
		id: 3,
		nombre: "Frappe oreo",
		tamanos: ["Pequeño", "Mediano", "Grande"],
		precio: 70,
		rating: 4,
		imagen: require("./imgs/frappeOreo.png"),
		infoNutricional: require(":/imgs/frappe_oreo.jpeg")
	},
	{
		id: 4,
		nombre: "Capuchino",
		tamanos: ["Pequeño", "Mediano", "Grande"],
		precio: 65,
		rating: 5,
		imagen: require("./imgs/capuchino.png"),
		infoNutricional: require(":/imgs/capuccino.jpeg")
	},
	{
		id: 5,
		nombre: "Matcha",
		tamanos: ["Pequeño", "Mediano", "Grande"],
		precio: 75,
		rating: 4,
		imagen: require("./imgs/matcha.png"),
		infoNutricional: require(":/imgs/matcha.jpeg")
	},
	{
		id: 6,
		nombre: "Infusión té",
		tamanos: ["Pequeño", "Mediano", "Grande"],
		precio: 50,
		rating: 3,
		imagen: require("./imgs/infusionTe.png"),
		infoNutricional: require(":/imgs/infusion_de_te.jpeg")
	},
];

export const ContextoBebidas = createContext();

// Proveedor del contexto
export const BebidasProvider = ({ children }) => {
	const [bebidasState, setBebidasState] = useState(
		bebidas.map((bebida) => ({
			...bebida,
			calificacionesIndividuales: [], // Inicializar un arreglo vacío para cada bebida
		})),
	);

	const updateRating = (id, newRating) => {
		setBebidasState((currentBebidas) =>
			currentBebidas.map((bebida) => {
				if (bebida.id === id) {
					const newRatingsArray = [...bebida.calificacionesIndividuales, newRating];
					const updatedRating = newRatingsArray.reduce((a, b) => a + b, 0) / newRatingsArray.length;
					return { ...bebida, rating: updatedRating, calificacionesIndividuales: newRatingsArray };
				}
				return bebida;
			}),
		);
	};

	return (
		<ContextoBebidas.Provider value={{ bebidas: bebidasState, updateRating }}>{children}</ContextoBebidas.Provider>
	);
};
