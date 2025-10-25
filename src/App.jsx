import { Allroute } from './route/Allroute'
import { Header } from './components/Header'
import { Footer } from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Allroute />
      </main>
      <Footer/>
    </div>
  )
}

export default App