import React from 'react'
import Nav from './Components/Nav';
import MobileNav from './Components/MobileNav';
import Hero from './Components/Hero';
import HeroII from './Components/HeroII';
import Category from './Components/Category';
import FeatureSection from './Components/FeatureSection';
import FeatureSection2 from './Components/FeaturesSection2';
import Banner from './Components/Banner';
import Blog from './Components/Blog';
import NewsLetter from './Components/NewsLetter';
import FooterGrid from './Components/FooterGrid';
import Footer from './Components/Footer';



const App = () => {
  return (
    <>
     <Nav/>
     <MobileNav/>
     <Hero/>
     <HeroII/>
     <Category/>
     <FeatureSection/>
     <FeatureSection2/>
     <Banner/>
     <Blog/>
     <NewsLetter/>
     <FooterGrid/>
     <Footer/>
    </>
  )
}

export default App