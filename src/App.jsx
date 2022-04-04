import React from 'react'
import Header from "./components/header/header";
import Navigation from "./components/nav/nav";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import Testimonial from "./components/testimonials/testimonial";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Services from "./components/services/services";

const App = () => {
    return (
        <>
            <Header />
            <Navigation />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
        </>
    )
}
export default App