import './App.css';
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Jumbotron/>
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
