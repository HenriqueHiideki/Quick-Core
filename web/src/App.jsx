import { Routes, Route, Navigate } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout/MainLayout"
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute"
import { Home } from "./pages/Home/Home"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Vote } from "./pages/Vote/Vote"
import { Settings } from "./pages/Settings/Settings"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import { CreatePoll } from "./pages/CreatePoll/CreatePoll"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* ROTAS PROTEGIDAS COM MAINLAYOUT */}
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vote/:id" element={<Vote />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/create-poll" element={<CreatePoll />} />
        </Route>
      </Route>

      {/* ROTAS SEM MAINLAYOUT */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App;