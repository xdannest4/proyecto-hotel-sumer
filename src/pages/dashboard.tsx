// src/pages/Dashboard.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showAdminInfo, setShowAdminInfo] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const adminInfo = {
    nombre: "Juan Pérez",
    correo: "admin@ejemplo.com",
    usuario: "admin123",
    ingreso: "12/04/2026",
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div className="dashboard-page">
      <button
        className={`sidebar-toggle ${sidebarOpen ? "open" : ""}`}
        type="button"
        aria-label={sidebarOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        {sidebarOpen ? "x" : "☰"}
      </button>

      <div className={`dashboard-layout ${sidebarOpen ? "sidebar-open" : ""}`}>
        <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : "closed"}`}>
          <div className="sidebar-header">
            <h2>Menú</h2>
          </div>

          <button
            className="sidebar-button"
            type="button"
            onClick={() => setShowAdminInfo((prev) => !prev)}
          >
            {showAdminInfo ? "Ocultar administrador" : "Mostrar administrador"}
          </button>

          {showAdminInfo && (
            <div className="admin-info">
              <p>
                <span>Nombre:</span> {adminInfo.nombre}
              </p>
              <p>
                <span>Correo:</span> {adminInfo.correo}
              </p>
              <p>
                <span>Usuario:</span> {adminInfo.usuario}
              </p>
              <p>
                <span>Ingreso:</span> {adminInfo.ingreso}
              </p>
            </div>
          )}

          <nav className="sidebar-nav">
            <button className="sidebar-button" type="button" onClick={() => navigate("/crear-user")}>
              Crear huesped
            </button>
            <button className="sidebar-button" type="button" onClick={() => navigate("/consulta-huesped")}>
              Consultar huesped
            </button>
            <button className="sidebar-button" type="button" onClick={() => navigate("/modificar-huesped")}>
              Modificar huesped
            </button>
            <button className="sidebar-button" type="button" onClick={() => navigate("/eliminar-huesped")}>
              Eliminar huesped
            </button>
          </nav>

          <button
            className="sidebar-logout"
            type="button"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </aside>

        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1>¡Bienvenido!</h1>
            <p>Has iniciado sesión correctamente</p>
          </div>

          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h2>Resumen de huesped</h2>
              <p>Información clave sobre tu cuenta y actividad reciente.</p>
            </div>

            <div className="dashboard-card">
              <h2>Estadísticas</h2>
              <p>Datos importantes para ayudarte a tomar mejores decisiones.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
