import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import List from "./pages/List";
import Hotel from "./pages/Hotel";
import Auth from "./pages/Auth";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Booking from "./pages/Booking";
import PageLayout from "./components/PageLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<List />} />
          <Route path="/hotel/:id" element={<Hotel />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
