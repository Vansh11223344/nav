import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // <-- Add this import
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
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
