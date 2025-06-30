import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import SuccessStories from './components/SuccessStories'
import WhyChoose from './components/WhyChoose'
import HowItWorks from './components/HowItWorks'
import RecentCouples from './components/RecentCouples'
import MeetOurTeam from './components/MeetOurTeam'
import PhotoGallery from './components/PhotoGallery'
import BlogArticles from './components/BlogArticles'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import FindYourMatch from './components/FindYourMatch'
import AboutWeddingMatrimony from './components/AboutWeddingMatrimony'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SuccessStories />
        <AboutWeddingMatrimony />
        <WhyChoose />
        <HowItWorks />
        <RecentCouples />
        <MeetOurTeam />
        <PhotoGallery />
        <BlogArticles />
        <FindYourMatch />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

export default Home



