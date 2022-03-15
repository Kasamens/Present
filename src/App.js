import './App.css';
import './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About';
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
