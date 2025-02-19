// App.js
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Flow from "./components/Flow";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Hero />
      <Features />
      <Plans />
      <Testimonials />
      <Flow />
      <Faq />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
