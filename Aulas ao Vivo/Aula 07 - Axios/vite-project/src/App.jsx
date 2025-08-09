
import { UserForm } from "./components/UserForm"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "./pages/LandingPage"
import { Home } from "./pages/Home"
import { UserFormPage } from "./pages/UserFormPage"
import { Login } from "./pages/Login"
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/usuarios" element={<Home />} />
          <Route path="/registro" element={<UserFormPage />} />
          <Route path="/editar-usuario/:id" element={<UserFormPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
