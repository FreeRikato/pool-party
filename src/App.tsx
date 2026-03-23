import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import SoloPlayer from "./pages/SoloPlayer";
import GroundOwner from "./pages/GroundOwner";
import CourtBooking from "./pages/CourtBooking";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/find-players" element={<SoloPlayer />} />
          <Route path="/ground-owners" element={<GroundOwner />} />
          <Route path="/book-court" element={<CourtBooking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
