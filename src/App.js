import Home from "./views/Home";
import ExerciseView from "./views/ExerciseView";
import { Route, Routes } from "react-router-dom";
import PopupVideo from "./views/PopupVideo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./views/Layout";
import Signup from "./views/Signup";
import Login from "./views/Login";
import History from "./views/History";
import Result from "./views/Result";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="camera" element={<ExerciseView />} />
          <Route path="history" element={<History />} />
          <Route path="result" element={<Result />} />
          {/* <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} /> */}
          <Route path="exercise/:excerciseId" element={<ExerciseView />} />
          <Route path="popup" element={<PopupVideo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
