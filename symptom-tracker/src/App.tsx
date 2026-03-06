import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Symptom from "./pages/Symptom";

const Layout = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/symptom" element={<Symptom />} />
    </Routes>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App
