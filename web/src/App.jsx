import { Routes, Route } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout/MainLayout"
import { Home } from "./pages/Home/Home"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Vote } from "./pages/Vote/Vote"
import { Settings } from "./pages/Settings/Settings"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"

function App() {
  return(
    <Routes>
      {/* ROTAS DO SISTEMA QUE USAM O COMPONENTE <MainLayout> */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* ROTAS DO SISTEMA QUE NAO USAM O <MainLayout> */}
      <Route path="/login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  )
}

export default App;