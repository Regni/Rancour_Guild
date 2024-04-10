import "./App.css";
import Header from "./pages/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Raiders from "./pages/Raiders";
import Apply from "./pages/Apply";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/roster" element={<Raiders />} />
          <Route path="/apply" element={<Apply/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
