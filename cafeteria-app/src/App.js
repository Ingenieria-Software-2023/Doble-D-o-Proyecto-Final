import React from "react";
import "./App.css";
import { BebidasProvider } from "./CatalogoBebidasContext";
import { BebidaSeleccionadaProvider } from "./BebidaSeleccionadaContext";
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
					</Routes>
				</Router>
				{/* <div className="App">
					{/* <Navbar />
					<CatalogoBebidas /> */}
				{/* <MetodosPago />
					<Retroalimentacion />
					<PersonalizacionBebidas /> */}
				{/* </div>*/}
			</BebidaSeleccionadaProvider>
		</BebidasProvider>
	);
}

export default App;
