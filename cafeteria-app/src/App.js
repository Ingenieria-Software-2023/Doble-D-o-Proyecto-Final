import React from "react";
import "./App.css";
import { BebidasProvider } from "./CatalogoBebidasContext";
import { BebidaSeleccionadaProvider } from "./BebidaSeleccionadaContext";

import Navbar from "./components/BarraNavegacion";
import CatalogoBebidas from "./components/CatalogoBebidas";
import MetodosPago from "./components/VentanaPago";
import Retroalimentacion from "./components/VentanaRetroalimentacion";
import PersonalizacionBebidas from "./components/PersonalizacionBebidas";

function App() {
	return (
		<BebidasProvider>
			<BebidaSeleccionadaProvider>
				<div className="App">
					<Navbar />
					<CatalogoBebidas />
					{/* <MetodosPago />
					<Retroalimentacion />
					<PersonalizacionBebidas /> */}
				</div>
			</BebidaSeleccionadaProvider>
		</BebidasProvider>
	);
}

export default App;
