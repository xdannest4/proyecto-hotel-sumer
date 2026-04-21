import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import CrearUser from "./pages/crearUser";
import ConsultaHuesped from "./pages/consultaHuesped";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crear-user" element={<CrearUser />} />
        <Route path="/consulta-huesped" element={<ConsultaHuesped />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
