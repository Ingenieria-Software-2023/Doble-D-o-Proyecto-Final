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
	},
	{
		id: 2,
		nombre: "Chocolate con canela",
		tamanos: ["Pequeño", "Mediano", "Grande"],
		precio: 78,
		rating: 4,
		imagen: require("./imgs/chocolateCanela.png"),
	},
	{
		id: 3,
		nombre: "Frappe oreo",
		tamanos: ["Pequeño", "Mediano", "Grande"],
		precio: 70,
		rating: 4,
		imagen: require("./imgs/frappeOreo.png"),
	},
	{
		id: 4,
		nombre: "Capuchino",
		tamanos: ["Pequeño", "Mediano", "Grande"],
		precio: 65,
		rating: 5,
		imagen: require("./imgs/capuchino.png"),
	},
	{
		id: 5,
		nombre: "Matcha",
		tamanos: ["Pequeño", "Mediano", "Grande"],
		precio: 75,
		rating: 4,
		imagen: require("./imgs/matcha.png"),
	},
	{
		id: 6,
		nombre: "Infusión té",
		tamanos: ["Pequeño", "Mediano", "Grande"],
		precio: 50,
		rating: 3,
		imagen: require("./imgs/infusionTe.png"),
	},
];

export const ContextoBebidas = createContext();

// Proveedor del contexto
export const BebidasProvider = ({ children }) => {
	return <ContextoBebidas.Provider value={{ bebidas }}>{children}</ContextoBebidas.Provider>;
};