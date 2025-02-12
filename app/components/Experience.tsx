"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Software Engineer",
    period: "Jul 2021 - Jul 2023",
    location: "India",
    achievements: [
      "Engineered and deployed AWS Lambda functions integrated with DynamoDB and API Gateway to automate inventory updates across physical and online stores, reducing manual intervention and improving response times by 30%.",
      "Created RESTful APIs using AWS Lambda and Python to enable seamless communication between frontend and backend systems, reducing order processing time by 25%.",
      "Integrated machine learning recommendation algorithms into Myer's e-commerce platform, leveraging AWS SageMaker and Elasticsearch, resulting in a 20% improvement in product search accuracy.",
      "Implemented caching mechanisms with AWS ElastiCache (Redis) to reduce backend query times, improving page load speeds by 35%.",
      "Built backend architecture to accommodate high traffic during peak shopping events, maintaining 99.9% uptime.",
    ],
  },
  {
    company: "Pankuri & Co.",
    role: "Software Engineer Intern",
    period: "Jan 2021 - Jun 2021",
    location: "India",
    achievements: [
      "Delivered REST APIs using Spring Boot and Node.js to enable real-time interactive sessions and content distribution, supporting over 1,000 concurrent users.",
      "Enhanced user-facing components using React.js, TypeScript, and CSS, achieving a 25% increase in user engagement.",
      "Optimized complex SQL queries in PostgreSQL, reducing query execution time by 40%.",
      "Automated backend service deployments through CI/CD pipelines using Jenkins and Docker, reducing release cycles by 30%.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-light mb-4">Work Experience</h2>
          <div className="w-16 h-[1px] bg-white mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-gray-950 border-gray-800 overflow-hidden hover:border-white/20 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-light flex justify-between items-center flex-wrap gap-4">
                    <span className="text-white">{exp.company}</span>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </CardTitle>
                  <p className="text-gray-400">
                    {exp.role} • {exp.location}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

