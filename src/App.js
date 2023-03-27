import Home from './views/Banner';
import Layout from './views/Layout';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExerciseView from './views/ExeciseView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="camera" element={<ExerciseView />} />
          {/* <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
      
    </div>
  );
}


export default App;
