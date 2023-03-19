import logo from './logo.svg';
import { Routes, Route} from "react-router-dom";
import Home from './views/Home';
import Layout from './views/Layout';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
  // return (
  //   <div className="App">
  //     <Layout />
  //     <Home />
  //   </div>
  // );
}

export default App;
