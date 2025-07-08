"use client";

import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "/avatar1.jpg",
    content:
      "ZapClone has saved our team countless hours by automating our lead nurturing process. What used to take days now happens automatically.",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartUpX",
    image: "/avatar2.jpg",
    content:
      "As a small team, automation is crucial for us. ZapClone allows us to compete with much larger companies by automating our workflows.",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "Global Solutions",
    image: "/avatar3.jpg",
    content:
      "The ease of setting up workflows in ZapClone is unmatched. We've automated everything from invoice processing to employee onboarding.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Loved by teams worldwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Join thousands of teams who use ZapClone to automate their work.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
