import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Api from "./components/api";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
