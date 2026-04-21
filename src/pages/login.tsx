import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";

const Login = () => {
  // Estados para guardar lo que escribe el usuario
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();

  // Simulación de login correcto
  if (email && password) {

    localStorage.setItem("auth", "true");
    
    navigate("/dashboard"); // 👈 redirige
  }
};

return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            className="login-input"
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="login-input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-button" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;