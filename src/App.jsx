import "./App.css";
import { LandingPage } from "./Pages/LandingPage";
import { LayoutBase } from "./Pages/LayoutBase";
import Userpage from "./Pages/UserPage/UserPage";
import { Catagory } from "./Pages/Catagory/Catagory";
import { Contact } from "./Pages/Contact/Contact";
import Settings from "./Pages/Settings/Settings";
import Shop from "./Pages/Shop/Shop";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route index element={<LandingPage />} />
          <Route path="/UserPage" element={<Userpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Catagories" element={<Catagory />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
