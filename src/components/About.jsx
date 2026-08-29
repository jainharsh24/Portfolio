import React from 'react';
import { motion } from 'framer-motion';
import myphoto from '../assets/myphoto.jpg'

const aboutInfo = [
    {
        icon: () => <span>💻</span>,
        title: "Experience",
        description: "Java & Spring Boot development"
    },
    {
        icon: () => <span>🎓</span>,
        title: "Education",
        description: "Computer Science"
    }
];


const About = () => {
    return (
        
        < div id = 'about' className = 'py-20 bg-dark-200' >
            <div className='container mx-auto px-6'>
                {/*heading */}
                <h2 className='text-3xl font-bold text-center mb-4'>About
                    <span className='text-purple'> Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-4'>Get to know about my background and passive</p>


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    id='about'
                    className='flex flex-col md:flex-row items-center gap-12'
                >
                    {/* image */}
                    <div className='md:w-3/8 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover'
                            src={myphoto} alt="myphoto" />
                    </div>

                    {/* text content*/}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-5/8 flex flex-col gap-6 text-gray-300 text-lg'
                    >
                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>I am a passionate Java Developer with a strong background in
                                software development. I have been working on various projects that involve creating
                                innovative solutions to real-world problems. My journey in the tech industry has been
                                driven by a desire to learn and grow, and I am constantly seeking new challenges to enhance
                                my skills.</p>

                            <p className='text-gray-300 mb-12'>I believe in the power of collaboration and teamwork, and I enjoy working with others to
                                bring ideas to life. I am always eager to explore new technologies and stay updated with
                                the latest trends in the industry. My goal is to contribute to meaningful projects that
                                make a positive impact on society.</p>

                            {/* cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index) => (
                                        <div key={index} className='bg-dark-300 p-6 rounded-2xl 
                                    transition-transform duration-300 hover:-translate-y-2 cursor-pointer'
                                        >
                                            <div className='text-purple text-4xl mb-4'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'
                                            >{data.title}</h3>
                                            <p className='text-gray-400'
                                            >{data.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </motion.div>
                </motion.div>
            </div>    
        </div >
    )
}

export default About
