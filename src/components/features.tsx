"use client";

import { Card } from "./ui/card";
import { Rocket, Zap, Cpu, BarChart2 } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Easy Automation",
    description:
      "Create automated workflows between your apps with just a few clicks.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "1,000+ Integrations",
    description: "Connect all your favorite apps and services seamlessly.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />,
    title: "AI Powered",
    description: "Our AI suggests automations based on your usage patterns.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-primary" />,
    title: "Advanced Analytics",
    description: "Track your automation performance and optimize workflows.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Powerful features to automate anything
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Save time and focus on what matters by automating repetitive tasks
            across all your apps.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 px-4 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
