import React from 'react';
import './App.css';

// コンポーネント読み込み
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import LegalNotice from './components/LegalNotice'; // ★ 新規追加
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
      <Faq />
      <Contact />
      {/* 特定商取引法に基づく表記 */}
      <LegalNotice />
      <Footer />
    </div>
  );
}

export default App;
