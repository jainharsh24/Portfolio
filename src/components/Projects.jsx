import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa';



const projects = [
  {
    title: "SelfEdu Platform",
    description: "A full-stack online learning platform built with Ai systems.",
    image: "https://unsplash.com",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf"]
  },
  {
    title: "AI Medical Report Analyzer",
    description: "An AI-powered tool for analyzing medical reports and generating insights.",
    image: "https://unsplash.com",
    tech: ["java", "Spring boot", "Groq API" , "PostgreSQL"]
  },
  {
    title: "Third-party APPS risky permission Detector",
    description: "A tool that detects risky permissions in third-party applications to enhance user privacy and security.",
    image: "https://unsplash.com",
    tech: ["Kotlin", "Android Studio", "Android SDK", "Android Package Manager"]
  }
];




const Projects = () => {
  return (
    // 1. Root container changed to a standard <div> to keep headers fixed in place
    <div id='projects' className='py-20 bg-dark-200'>
        <div className = 'container mx-auto px-6'>
            
            {/* 2. Heading elements remain un-animated and completely stable */}
            <h2 className = 'text-3xl font-bold text-center mb-4'>
                My <span className='text-purple'>Projects</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'
            >A selection of my recent work and accomplishments.</p>

            {/* 3. motion wrapper handles the slide-up animation for the grid and the button underneath */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount : 0.2 }}
            >
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {/* Projects */}
                {
                    projects.map((project, index)=>(
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tech={project.tech}
                        />
                    ))
                }
                </div>
                
                <div className ='text-center mt-12'>
                    <a href="https://github.com/jainharsh24" className='inline-flex 
                    items-center px-6 py-3 border border-purple rounded-lg 
                    font-medium hover:bg-purple/20 transition duration-300'>
                        <span>View More Projects</span>
                        <FaArrowRight className='ml-2'/>
                    </a>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default Projects
