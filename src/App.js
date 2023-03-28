import Home from './views/Banner';
import Layout from './views/Layout';
import Camera from './components/Camera';
import { Route,Routes } from 'react-router-dom';
import ExercisePage from './views/ExercisePage';
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
          <Route path="/exercise" element={<ExercisePage/>} />
        </Route>
      </Routes>
      
    </div>
  );
}


export default App;
