
import { UserForm } from "./components/UserForm"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { Home } from "./pages/Home"
import { UserFormPage } from "./pages/UserFormPage"
import { Login } from "./pages/Login"
import { useAuth } from "./context/AuthContext"

// Criando proteção para as rotas
const AuthRoutes = ({component: Component}) => {
  const { userId } = useAuth();
  // UserID - Se existir: Renderiza o componente. Se não existir: Direciona pra página inicial
  return userId ? <Component /> : <Navigate to="/login"/>
}

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AuthRoutes component={LandingPage} />} />
          <Route path="/usuarios" element={<AuthRoutes component={Home} />} />
          <Route path="/registro" element={<AuthRoutes component={UserFormPage} />} />
          <Route path="/editar-usuario/:id" element={<AuthRoutes component={UserFormPage} />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
