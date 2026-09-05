import React from 'react'
import { motion } from 'framer-motion'


const skills = [
  {
    icon: () => <span>☕</span>,
    name: "Java",
    description: "Building backend applications with strong OOP and core Java fundamentals.",
    tags: ["Java", "OOP", "Collections", "Exception Handling"]
  },
  {
    icon: () => <span>🌱</span>,
    name: "Spring Boot",
    description: "Developing REST APIs and backend applications with a focus on clean and maintainable architecture.",
    tags: ["Spring Boot", "Spring Security", "Spring Data JPA"]
  },
  {
    icon: () => <span>🗄️</span>,
    name: "Databases",
    description: "Designing and working with relational databases for backend applications and data-driven systems.",
    tags: ["PostgreSQL", "SQL", "Hibernate", "JPA"]
  },
  {
    icon: () => <span>🧠</span>,
    name: "Problem Solving",
    description: "Strengthening algorithmic thinking and problem-solving skills through Data Structures and Algorithms.",
    tags: ["DSA", "LeetCode", "Algorithms"]
  },
  {
    icon: () => <span>⚛️</span>,
    name: "Frontend Development",
    description: "Building responsive interfaces and connecting them with backend services and REST APIs.",
    tags: ["React", "JavaScript", "Tailwind CSS"]
  },
  {
    icon: () => <span>🛠️</span>,
    name: "Development Tools",
    description: "Using modern development tools for version control, deployment, and backend development.",
    tags: ["Git", "GitHub", "Maven", "Linux", "AWS"]
  }
];



const Skills = () => {
  return (

    <div id='skills' className ='py-20 bg-dark-100'>
      <div className='container mx-auto px-6'>

        <h2 className='text-3xl font-bold text-center mb-4'>
          My
          <span className='text-purple'> Skills</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl 
        mx-auto mb-16'>Technologies and concepts I use to build, understand, and improve software.</p>


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'
        >
      
          {
            skills.map((skill, index) => (
              <div key={index} className='bg-dark-300 rounded-2xl 
                        p-6 hover:-translate-y-2 transition duration-300 
                        cursor-pointer'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 text-purple 
                  mr-4 flex items-center justify-center text-3xl bg-dark-100 rounded-xl'>
                    <skill.icon />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-100'>{skill.name}</h3>
                </div>
                <p className='text-gray-400 mb-4'>{skill.description}

                </p>
                <div className='flex flex-wrap gap-2'>
                  {skill.tags.map((tech) => (
                    <span key={tech} className='px-3 py-1 bg-dark-400 
                                    rounded-full text-sm'>{tech}</span>
                  ))}
                </div>
              </div>
            ))
          }
        </motion.div>
      </div>
    </div>
  )
}


export default Skills

