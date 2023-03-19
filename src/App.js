import Home from './views/Home';
import { NavBar } from './views/NavBar';
import Sequence from './views/Sequence';
import { Footer } from './views/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Sequence />
      <Footer />
    </div>
  );
}


export default App;
