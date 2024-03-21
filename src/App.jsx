import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Raiders from "./components/Raiders";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="roster" element={<Raiders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
