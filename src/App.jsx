
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home/Home";

function App() {
 
  return (
   <BrowserRouter>
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<h1>Aca el carrito</h1>} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
