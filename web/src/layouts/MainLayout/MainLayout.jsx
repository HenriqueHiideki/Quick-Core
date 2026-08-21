import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/header";
import { SideBar } from "../../components/SideBar/SideBar";
import "../../App.css"
import "./mainlayout-style.css"

export function MainLayout(){
    return(
        <main>
            <Header />
            <div className="container-content">
                <section>
                    <SideBar />
                </section>     
                <section className="content">
                    <Outlet />
                </section>           
            </div>
        </main>
    )
}