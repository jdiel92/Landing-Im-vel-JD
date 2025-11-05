import './App.css'
import Header from './Header'
import PropertyList from './PropertyList'
import UsedPropertyList from './UsedPropertyList'
import AboutUs from './AboutUs'
import AnnounceForm from './AnnounceForm'
import Footer from './Footer'

function App() {
  return (
    <div className="App" id="home">
      <Header />
      <main>
      <div id="destaques"><PropertyList /></div>
      <div id="usados"><UsedPropertyList /></div>
      <AboutUs />
      <AnnounceForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
