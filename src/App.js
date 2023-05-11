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
import ResultView from "./views/ResultView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="history" element={<History />} />
          <Route path="history/:resultId" element={<ResultView />} />
          <Route path="exercise/:excerciseId" element={<ExerciseView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
