import { Route, Routes } from "react-router-dom";
import Shop from "../Shop";

export default function ShopRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/:categoryName" element={<Shop />} />
    </Routes>
  );
}
