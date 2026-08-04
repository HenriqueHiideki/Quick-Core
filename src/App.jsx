import './App.css'
import { SideBar } from './components/SideBar/SideBar'
import { Header } from './components/Header/header'

function App() {
  return(
    <main>
      <Header />
      <section>
        <SideBar/>
      </section>
    </main>
  )
}

export default App
