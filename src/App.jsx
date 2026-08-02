import './App.css'
import { ButtonCreatePoll } from './components/Button'
import { UserIcon } from './components/UserIcon'
import { SearchBar } from './components/SearchBar'
import { Title } from './components/Title'

function App() {
  return(
    <main>
      <header>
        <img src="/quick-core-logo.png" alt="icone do quick core" className="logo" />
        <Title>Quick Core</Title>
        <SearchBar>Pesquise Enquetes, tópicos ou criadores...</SearchBar>
        <ButtonCreatePoll>Create Poll</ButtonCreatePoll>
        <UserIcon></UserIcon>
        
      </header>

      <section>

      </section>
    </main>
  )
}

export default App
