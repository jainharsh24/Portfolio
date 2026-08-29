import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Contact = () => {
    return (
        <div id='contact' className='py-20 bg-dark-200'>
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>Get In
                    <span className='text-purple'> Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto 
                mb-16'>Have a project in mind or want to collaborte?
                    Let's talk!</p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl 
                    mx-auto'
                >
                    {/* contact from */}
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block 
                                text-gray-300 mb-2'>Your Name</label>
                                <input className='w-full bg-dark-300 border 
                                border-dark-400 rounded-lg px-4 py-3 
                                outline-nonce' type='text'></input>
                            </div>

                            <div>
                                <label htmlFor="email" className='block 
                                text-gray-300 mb-2'>Email</label>
                                <input className='w-full bg-dark-300 border 
                                border-dark-400 rounded-lg px-4 py-3 
                                outline-nonce' type='email'></input>
                            </div>

                            <div>
                                <label htmlFor="message" className='block 
                                text-gray-300 mb-2'>Your message</label>
                                <input className='w-full h-40 bg-dark-300 border 
                                border-dark-400 rounded-lg px-4 py-3 
                                outline-nonce' type='text'></input>
                            </div>
                            <button type='submit' className='w-full px-6 py-3 
                            bg-purple rounded-lg font-medium hover:bg-purple-700 
                            transition duration-300 cursor-pointer'>Send</button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className='space-y-8'>
                        <div className='flex items-satrt'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Belapur CBD, Navi Mumbai</p>
                            </div>
                        </div>

                        <div className='flex items-satrt'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>harshhjain2415@gamil.com</p>
                            </div>
                        </div>

                        <div className='flex items-satrt'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>9699720726</p>
                            </div>
                        </div>

                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href="https://github.com" className='w-12 h-12 rounded-full bg-dark-300 
                                flex items-center justify-center text-gray-400 hover:bg-gray-400 
                                hover:text-white transition duration-300'>
                                    <FaGithub/>
                                </a>

                                <a href="https://linkedin.com" className='w-12 h-12 rounded-full bg-dark-300 
                                flex items-center justify-center text-blue-400 hover:bg-blue-400 
                                hover:text-white transition duration-300'>
                                    <FaLinkedin/>
                                </a>

                                <a href="https://instagram.com" className='w-12 h-12 rounded-full bg-dark-300 
                                flex items-center justify-center text-orange-400 hover:bg-orange-400 
                                hover:text-white transition duration-300'>
                                    <FaInstagram/>
                                </a>
                            </div>
                        </div>
                    </div>

                </motion.div>


            </div>

        </div>
    )

}

export default Contact
