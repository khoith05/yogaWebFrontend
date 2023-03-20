import Home from './views/Home';
import Layout from './views/Layout';
import Camera from './components/Camera';
import { NavBar } from './views/NavBar';
import Sequence from './views/Sequence';
import { Footer } from './views/Footer';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="camera" element={<Camera />} />
          {/* <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
      
    </div>
  );
}


export default App;
