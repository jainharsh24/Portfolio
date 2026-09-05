import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa';


const projects = [
  {
    title: "SelfEdu — AI Learning Platform",
    description:
      "An AI-powered self-learning platform that generates personalized learning roadmaps and provides curated resources, quizzes, and progress tracking.",
    image: "/projects/selfedu.png",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "Groq API"
    ],
    demo: "#",
    code: "#"
  },
  {
    title: "ExplainReport — AI Medical Report Explainer",
    description:
      "A Spring Boot application that processes medical reports and combines rule-based analysis with AI to generate understandable insights and alerts.",
    image: "/projects/explainreport.png",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Groq API",
      "AWS EC2"
    ],
    demo: "#",
    code: "#"
  },
  {
    title: "Third-Party App Risky Permission Detector",
    description:
      "An Android security tool that analyzes third-party applications and identifies potentially risky permissions to improve user privacy and security.",
    image: "/projects/permission-detector.png",
    tech: [
      "Kotlin",
      "Android Studio",
      "Android SDK",
      "Android Package Manager"
    ],
    demo: "#",
    code: "#"
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
            >Projects where I turn ideas and problems into practical software.</p>

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
