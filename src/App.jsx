import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurWork from './components/OurWork';
import TechInnovation from './components/TechInnovation';
import MarketOpportunity from './components/MarketOpportunity';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import BlogNews from './components/BlogNews';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/what-we-do" element={<OurWork />} />
          <Route path="/technology" element={<TechInnovation />} />
          <Route path="/market-opportunity" element={<MarketOpportunity />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<BlogNews />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
