import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import CrearUser from "./pages/crearUser";
import ConsultaHuesped from "./pages/consultaHuesped";
import ModificarHuesped from "./pages/modificarHuesped";
import EliminarHuesped from "./pages/eliminarHuesped";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crear-user" element={<CrearUser />} />
        <Route path="/consulta-huesped" element={<ConsultaHuesped />} />
        <Route path="/modificar-huesped" element={<ModificarHuesped />} />
        <Route path="/eliminar-huesped" element={<EliminarHuesped />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
