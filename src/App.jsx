import "./App.css";
import { LandingPage } from "./Pages/LandingPage";
import { LayoutBase } from "./Pages/LayoutBase";
import { User } from "./Pages/User/User";
import { Contact } from "./Pages/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route index element={<LandingPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
