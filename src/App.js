import React from "react";
import "./App.css";
import { BebidasProvider } from "./CatalogoBebidasContext";
import { BebidaSeleccionadaProvider } from "./BebidaSeleccionadaContext";
import { OrdenProvider } from "./OrdenContexto";
import { UsuarixsProvider } from "./UsuarixsContexto";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatalogoBebidas from "./components/CatalogoBebidas";
import MetodosPago from "./components/VentanaPago";
import Retroalimentacion from "./components/VentanaRetroalimentacion";
import PersonalizacionBebidas from "./components/PersonalizacionBebidas";
import CrearCuenta from "./components/CrearCuenta";
import InicioSesion from "./components/InicioSesion";

function App() {
	return (
		<BebidasProvider>
			<BebidaSeleccionadaProvider>
				<OrdenProvider>
					<UsuarixsProvider>
						<Router>
							<Routes>
								<Route
									path="/"
									element={<InicioSesion />}
								/>
								<Route
									path="/crear-cuenta"
									element={<CrearCuenta />}
								/>
								<Route
									path="/menu"
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
								<Route
									path="/retroalimentacion"
									element={<Retroalimentacion />}
								/>
							</Routes>
						</Router>
					</UsuarixsProvider>
				</OrdenProvider>
			</BebidaSeleccionadaProvider>
		</BebidasProvider>
	);
}

export default App;
