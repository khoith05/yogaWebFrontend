import logo from './logo.svg';
import { Routes, Route} from "react-router-dom";
import Home from './views/Home';
import { NavBar } from './views/NavBar';
import Sequence from './views/Sequence';
import { Footer } from './views/Footer';
import Layout from './views/Layout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">

//       <Routes>
//         <Route path="/" element={<Layout />}>
          
//           <Route index element={<Home />} />
//           {/* <Route path="about" element={<About />} />
//           <Route path="dashboard" element={<Dashboard />} />

//           <Route path="*" element={<NoMatch />} /> */}
//         </Route>
//       </Routes>
//     </div>
//   );
//   // return (
//   //   <div className="App">
//   //     <Layout />
//   //     <Home />
//   //   </div>
//   // );
// }

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
