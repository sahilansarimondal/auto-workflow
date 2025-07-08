"use client";

import { Button } from "./ui/button";
import { motion } from "motion/react";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#3b82f6"
        />
      </div>

      <div className="container relative py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Automate your work with{" "}
            <span className="text-primary">ZapClone</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Connect your apps and automate workflows in minutes. No coding
            required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button size="lg" asChild>
              <Link href="/signup">Get started for free</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">See how it works</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
