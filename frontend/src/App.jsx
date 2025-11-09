import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Category from "./component/Category";
import DealOfTheDay from "./component/dealoftheday";
import TopCollection from "./component/topcollection";
import Explore from "./component/explore";
import Guidance from "./component/Guidance";
import Enthusiast from "./component/enthusiatist";
import Footer from "./component/footer";

import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <DealOfTheDay />
      <TopCollection />
      <Explore />
      <Guidance />
      <Enthusiast />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />     {/* Landing Page */}
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
