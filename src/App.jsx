import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Dashboard } from "./pages/Dashboard/Dashboard";
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
            <Route path="/" element={<Home />}/>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default App;
