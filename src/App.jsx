import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurWork from './components/OurWork';
import MarketOpportunity from './components/MarketOpportunity';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import BlogNews from './components/BlogNews';
import Chatbot from './components/Chatbot';
import Service from './components/Service';
import ScrollToTop from './components/ScrollToTop'; // Add this import

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/what-we-do" element={<OurWork />} />
          <Route path="/market-opportunity" element={<MarketOpportunity />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<BlogNews />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/service" element={<Service />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
