import './App.css';
import './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/gallery' element={<Gallery/>}/>
              <Route exact path='/contact' element={<Contact/>}/>
          </Routes>
        </main>
        <footer>
          footer
        </footer>
    </div>
  </Router>
  );
}

export default App;
