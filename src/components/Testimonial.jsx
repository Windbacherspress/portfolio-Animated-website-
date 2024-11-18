import React from 'react'
import { motion } from 'framer-motion';
// import { i } from 'framer-motion/client';
import { TESTIMONIALS } from '../constants';

const Testimonial = () => {
    const childVariants ={
        hidden: {
            opacity: 0,
            y: 50
        },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: i * 0.5,
        }
    })
    
    }
  return (
    <section className='px-6 py-10 
    min-h-screen' 
    id='testimonials'>
    <h1 className='text-4xl m
    d:text-6xl 
    font-medium 
    tracking-tight
     mb-10'> What Folks Said About Us</h1>
     <div className="h-1 w-20 bg-white mb-8"></div>
      <div
      className="grid
      first-letter:grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-3 
      gap-6">
    {TESTIMONIALS.map((testimonial, index) => (
      <motion.div
      key={index}
      className='relative 
      rounded-lg 
      p-6 h-full
       backdrop-blur-3xl
       bg-stone-500/10'
       custom={index}
       initial='hidden'
       whileInView='visible'
       variants={childVariants}>
        <div className="flex items-center mb-4">
            <img src={testimonial.image} 
            alt={testimonial.name}
            className='w-12 h-12 rounded-full mr-4'
            loading='lazy'/>
        <div className="">
        <h2 className='text-lg font-semibold'>
            {testimonial.name}</h2>
            <p className='text-sm font-light'>
                {testimonial.title}</p>
        </div>
        </div>
        <p className='leading-relax'>
            {testimonial.feedback}</p>
       </motion.div> 
    ))}
      </div>
    </section>
  )
}

export default Testimonial;