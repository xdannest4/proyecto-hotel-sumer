import { AuthProvider } from "./context/AuthContext";
import './App.css'

function App() {
  return (
    <AuthProvider>
      <h1>Mi sistema de perfiles</h1>
    </AuthProvider>


  );
}

export default App;
