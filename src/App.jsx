import './App.css'
import { SideBar } from './components/SideBar/SideBar'
import { Header } from './components/Header/header'
import { DescriptionTitle } from './components/Description/DescriptionTitle'

function App() {
  return(
    <main>
      <Header />
      <div className='container-content'>
      <section>
        <SideBar/>
      </section>
      <section>
        <DescriptionTitle>Explore Tendências</DescriptionTitle>
      </section>
      </div>
    </main>
  )
}

export default App

