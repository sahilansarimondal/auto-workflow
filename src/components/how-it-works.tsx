"use client";

import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose your trigger",
    description:
      "Select an event that starts your workflow, like receiving an email or a new form submission.",
  },
  {
    id: 2,
    title: "Pick an action",
    description:
      "Decide what should happen next, like creating a task or sending a notification.",
  },
  {
    id: 3,
    title: "Customize your workflow",
    description:
      "Add filters, delays, or additional steps to make it work exactly how you need.",
  },
  {
    id: 4,
    title: "Turn it on",
    description:
      "Activate your workflow and let ZapClone handle the rest automatically.",
  },
];

export function HowItWorks() {
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
            How ZapClone works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Automate tasks in just a few simple steps. No coding required.
          </motion.p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative lg:flex lg:items-center lg:justify-center lg:odd:flex-row-reverse"
              >
                <div className="lg:w-1/2 lg:px-8">
                  <Card className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                        {step.id}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center w-1/2 px-8">
                    <ChevronRight className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
