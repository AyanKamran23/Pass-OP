import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App