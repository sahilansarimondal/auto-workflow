"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { WavyBackground } from "./ui/wavy-background";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { BackgroundBeams } from "./ui/background-beams";

export function CTA() {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return (
      <section className="relative overflow-hidden h-[40rem] w-full bg-background" />
    );
  }

  return (
    <section className="relative overflow-hidden h-[40rem] w-full flex items-center justify-center">
      {/* Theme-responsive background */}
      {resolvedTheme === "dark" ? (
        <BackgroundBeams className="absolute inset-0" />
      ) : (
        <WavyBackground
          backgroundFill="hsl(0 0% 100%)"
          colors={["#e0e7ff", "#c7d2fe", "#a5b4fc"]}
          waveOpacity={0.15}
          className="absolute inset-0"
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <BackgroundGradient className="rounded-[22px] p-1 bg-background">
            <div className="rounded-[20px] bg-background/80 backdrop-blur-sm p-10">
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/70">
                Ready to automate your work?
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Join over 2 million businesses that use our tools to automate
                their workflows.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" asChild className="relative overflow-hidden">
                  <Link href="/signup">
                    <span className="relative z-10">Get started for free</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/demo">Watch a demo</Link>
                </Button>
              </motion.div>
            </div>
          </BackgroundGradient>
        </motion.div>
      </div>
    </section>
  );
}
