import React from "react";
import "./App.css";
import { BebidasProvider } from "./CatalogoBebidasContext";
import { BebidaSeleccionadaProvider } from "./BebidaSeleccionadaContext";
import { OrdenProvider } from "./OrdenContexto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/BarraNavegacion";
import CatalogoBebidas from "./components/CatalogoBebidas";
import MetodosPago from "./components/VentanaPago";
import Retroalimentacion from "./components/VentanaRetroalimentacion";
import PersonalizacionBebidas from "./components/PersonalizacionBebidas";

function App() {
	return (
		<BebidasProvider>
			<BebidaSeleccionadaProvider>
				<OrdenProvider>
					<Router>
						<Routes>
							<Route
								path="/"
								element={<CatalogoBebidas />}
							/>
							<Route
								path="/personalizacion"
								element={<PersonalizacionBebidas />}
							/>
							<Route
								path="/pago"
								element={<MetodosPago />}
							/>
						</Routes>
					</Router>
					{/* <div className="App">
					{/* <Navbar />
					<CatalogoBebidas /> */}
					{/* 
					<Retroalimentacion />
					<PersonalizacionBebidas /> */}
					{/* </div>*/}
				</OrdenProvider>
			</BebidaSeleccionadaProvider>
		</BebidasProvider>
	);
}

export default App;
