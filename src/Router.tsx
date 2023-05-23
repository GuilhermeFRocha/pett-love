import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pets from "./pages/Pets";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets" element={<Pets />} />
    </Routes>
  );
}
