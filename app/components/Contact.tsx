"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-light mb-4">Get in Touch</h2>
          <div className="w-16 h-[1px] bg-white mx-auto mb-4"></div>
          <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Name" className="bg-black border-gray-800 focus:border-white/50" />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-black border-gray-800 focus:border-white/50"
                    />
                  </div>
                </div>
                <div>
                  <Input placeholder="Subject" className="bg-black border-gray-800 focus:border-white/50" />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    className="bg-black border-gray-800 focus:border-white/50 min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-white text-black hover:bg-gray-200">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

