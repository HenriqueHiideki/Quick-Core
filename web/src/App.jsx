import { Routes, Route, Navigate } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout/MainLayout"
import { Home } from "./pages/Home/Home"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Vote } from "./pages/Vote/Vote"
import { Settings } from "./pages/Settings/Settings"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* ROTAS COM MAINLAYOUT */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* ROTAS SEM MAINLAYOUT */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App;