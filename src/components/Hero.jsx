
import React from 'react';
import { motion } from 'framer-motion';
import myphoto from '../assets/myphoto.jpg';



function Hero() {
    return (
        <motion.div
            intial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            vewport={{ once: true }}
            id='home'
            className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
        >
            <div className='container ma-auto px-6 flex flex-col md:flex-row items-center justify-between'>
                {/* leftside */}
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Hi I'am <span className='text-purple'>Harsh Jain</span>
                    </h1>
                    <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Java Developer</h2>
                    <p className='text-lg text-gray-300 mb-6'>I create a real-world problem's solutions using modern technologies and innovative designs.</p>

                    <div className='flex space-x-5'>
                        <a href='#projects' className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Work</a>
                        <a href='#contact' className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300'>Contact me</a>
                    </div>
                </div>

                {/* rightside */}
                <div className='md:w-1/2 flex justify-center'>
                    <div className='relative w-64 h-64 md:w-80 md:h-80'>
                        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70'>
                            <motion.img 
                            animate={{y:[0, -20 , 0] }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: 'loop',ease: 'easeInOut' }}
                            className='relative rounded-full w-64 h64 md:w-80 md:h-80 object-cover z-10 '
                            src={myphoto} alt="profile"/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Hero;






