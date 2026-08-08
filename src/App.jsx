import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Vote } from "./pages/Vote/Vote";
import { Settings } from "./pages/Settings/Settings";
import { SideBar } from "./components/SideBar/SideBar";
import { Header } from "./components/Header/header";

function App() {
  return (
    <main>
      <Header />
      <div className="container-content">
        <section>
          <SideBar />
        </section>
        <section className="content">
          <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default App;
