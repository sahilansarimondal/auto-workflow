"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { clients } from "@/lib/constant";

export function Integrations() {
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
            Connect with your favorite apps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground"
          >
            ZapClone integrates with thousands of apps to automate your
            workflows.
          </motion.p>
        </div>

        <div className="relative">
          <InfiniteMovingCards
            items={clients}
            direction="right"
            speed="slow"
            className="mt-10"
          />
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Button asChild>
              <Link href="/integrations">Browse all integrations</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
