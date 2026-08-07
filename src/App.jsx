import "./App.css";
import { Routes, Route } from "react-router-dom"
import {Home} from "./pages/Home/Home"
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
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default App;
