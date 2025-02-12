"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Bank Customer Churn Prediction",
    description:
      "Developed a machine learning system achieving 83.14% accuracy in predicting customer churn, implementing SMOTE for imbalanced data handling.",
    technologies: ["Python", "Machine Learning", "SMOTE", "Web Development"],
    metrics: "83.14% Accuracy",
  },
  {
    title: "Retail Data Management System",
    description:
      "Designed and implemented a normalized relational database system with enhanced query performance and visual analytics integration.",
    technologies: ["PostgreSQL", "Database Design", "SQL", "Analytics"],
    metrics: "50% Query Performance Improvement",
  },
  {
    title: "Real-Time To-Do Application",
    description:
      "Built a scalable to-do application using modern web technologies and cloud services, supporting real-time updates.",
    technologies: ["React.js", "Node.js", "MongoDB", "Azure"],
    metrics: "<200ms Response Time",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-light mb-4">Featured Projects</h2>
          <div className="w-16 h-[1px] bg-white mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full hover:shadow-2xl hover:shadow-white/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-light text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.metrics}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-gray-700 hover:bg-white hover:text-black transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

