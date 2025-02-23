import AboutUsSection from '@/components/AboutPage/AboutUsSection'
import Footer from '@/components/Footer/Footer'
import BlogSection from '@/components/HomePage/BlogSection'
import Carousel from '@/components/HomePage/Carousel'
import TestimonialsSection from '@/components/HomePage/TestimonialsSection'
import { Button } from '@/components/ui/button'
import WhatsAppButton from '@/components/WhatsApp/WhatsAppButton'
import React from 'react'

const index = () => {
  return (
    <div>
        <section className="relative">
        
        <Carousel />
        
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              If you can dream it, We can build it.
            </p>
            <Button className="bg-bgBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </Button>
          </div>
        </div>
      </section>
      <WhatsAppButton/>
      <section >
        
        <AboutUsSection/>
        <TestimonialsSection/>
        <BlogSection/>
      
      </section>
      <Footer/>
    </div>
  )
}

export default index