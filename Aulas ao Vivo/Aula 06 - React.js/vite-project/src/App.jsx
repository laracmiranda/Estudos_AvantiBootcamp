import { UserCard } from "./components/UserCard"
import { UserForm } from "./components/UserForm"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserCard />} />
          <Route path="/registro" element={<UserForm />} />
          <Route path="/editar-usuario/:id" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
