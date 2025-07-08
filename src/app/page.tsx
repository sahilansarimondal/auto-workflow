"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn button path
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"; // Assuming shadcn card path
import {
  Sun,
  Moon,
  Zap,
  ArrowRight,
  CheckCircle,
  Settings,
  Users,
  Globe,
  Code,
  Repeat,
  Lightbulb,
} from "lucide-react"; // Using lucide-react for icons
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"; // Aceternity UI
import { LampContainer } from "@/components/ui/lamp"; // Aceternity UI
import { TracingBeam } from "@/components/ui/tracing-beam"; // Aceternity UI
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"; // Aceternity UI

// Mock useTheme hook for dark mode toggle.
// In a real Next.js app, you'd use your actual dark mode context/hook (e.g., next-themes).
const useTheme = () => {
  const [theme, setTheme] = useState("light"); // 'light' or 'dark'

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return { theme, toggleTheme };
};

// Main App component for the landing page
export default function App() {
  const { theme, toggleTheme } = useTheme();

  const words = `Connect your apps, automate your workflows, and supercharge your productivity.`;
  const heroHighlightWords = ["automate", "supercharge"];

  const features = [
    {
      icon: <Repeat className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />,
      title: "Effortless Integrations",
      description:
        "Connect thousands of apps with just a few clicks. No coding required.",
    },
    {
      icon: <Settings className="h-6 w-6 text-green-500 dark:text-green-400" />,
      title: "Customizable Workflows",
      description:
        "Design powerful automations tailored to your unique business needs.",
    },
    {
      icon: (
        <CheckCircle className="h-6 w-6 text-blue-500 dark:text-blue-400" />
      ),
      title: "Real-time Monitoring",
      description:
        "Keep track of your automated tasks and get instant notifications.",
    },
    {
      icon: <Users className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />,
      title: "Team Collaboration",
      description:
        "Share workflows with your team and streamline operations together.",
    },
    {
      icon: <Globe className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
      title: "Global Reach",
      description:
        "Automate tasks across different platforms and geographical locations.",
    },
    {
      icon: <Code className="h-6 w-6 text-red-500 dark:text-red-400" />,
      title: "Developer Friendly",
      description:
        "Extend functionality with webhooks and custom code snippets.",
    },
  ];

  const steps = [
    {
      title: "1. Choose Your Apps",
      description:
        "Select the applications you want to connect from our vast library of integrations.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
    },
    {
      title: "2. Define Your Trigger",
      description:
        "Set up an event in one app that starts your workflow (e.g., new email, new lead).",
      icon: <Zap className="h-6 w-6 text-white" />,
    },
    {
      title: "3. Add Actions",
      description:
        "Specify what happens next in other apps (e.g., send a message, create a task).",
      icon: <ArrowRight className="h-6 w-6 text-white" />,
    },
    {
      title: "4. Activate & Automate",
      description:
        "Turn on your workflow and watch your tasks get done automatically.",
      icon: <CheckCircle className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-100 font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          >
            <Zap className="h-7 w-7" />
            <span>FlowForge</span> {/* Zapier-like name */}
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Action Buttons & Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:block text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800"
            >
              Sign In
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 transition-colors hidden md:block">
              Get Started Free
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <LampContainer className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-10">
          {/* LampContainer provides a subtle background effect */}
        </LampContainer>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
            <HeroHighlight className="inline">
              <Highlight className="text-indigo-600 dark:text-indigo-400">
                Automate
              </Highlight>{" "}
              your world.
            </HeroHighlight>
            <br className="hidden md:block" />
            <HeroHighlight className="inline">
              Focus on what matters.
            </HeroHighlight>
          </h1>
          <TextGenerateEffect
            words={words}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          />
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Start Automating Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Watch a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 md:py-24 bg-white dark:bg-gray-950"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Unlock Your Team's Full Potential
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <CardHeader className="flex flex-row items-center space-x-4 p-6">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section with TracingBeam */}
      <section
        id="how-it-works"
        className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-950"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Simple Steps to Powerful Automation
          </h2>
          <div className="relative max-w-4xl mx-auto pb-24">
            {" "}
            {/* Added pb-24 for extra bottom padding */}
            {/* Removed 'absolute' from TracingBeam's className.
                The TracingBeam component internally handles its own beam's absolute positioning.
                Applying 'absolute' to the component itself takes it out of the document flow,
                causing subsequent sections to overlap. */}
            <TracingBeam>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="mb-16 flex items-start space-x-6 last:mb-0"
                >
                  <div className="flex-shrink-0 p-4 rounded-full bg-indigo-600 dark:bg-indigo-700 text-white shadow-lg z-10">
                    {step.icon}
                  </div>
                  <div className="flex-grow bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </TracingBeam>
          </div>
        </div>
      </section>

      {/* Testimonials/Trusted By Section (Placeholder) */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Trusted by Teams Worldwide
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75">
            {/* Replace with actual company logos */}
            <img
              src="https://placehold.co/120x40/e0e0e0/555555?text=Company+A"
              alt="Company A"
              className="h-10 dark:invert"
            />
            <img
              src="https://placehold.co/120x40/e0e0e0/555555?text=Company+B"
              alt="Company B"
              className="h-10 dark:invert"
            />
            <img
              src="https://placehold.co/120x40/e0e0e0/555555?text=Company+C"
              alt="Company C"
              className="h-10 dark:invert"
            />
            <img
              src="https://placehold.co/120x40/e0e0e0/555555?text=Company+D"
              alt="Company D"
              className="h-10 dark:invert"
            />
            <img
              src="https://placehold.co/120x40/e0e0e0/555555?text=Company+E"
              alt="Company E"
              className="h-10 dark:invert"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-indigo-600 dark:bg-indigo-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Join thousands of businesses already saving time and boosting
            efficiency with FlowForge.
          </p>
          <Button className="bg-white text-indigo-600 hover:bg-gray-100 dark:bg-gray-200 dark:text-indigo-800 text-lg px-10 py-4 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Get Started Free Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 dark:bg-gray-950 text-gray-300 dark:text-gray-400">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="flex flex-col items-center text-center">
            {" "}
            {/* Added flex, flex-col, items-center, and text-center */}
            <a
              href="#"
              className="flex items-center justify-center space-x-2 text-xl font-bold text-white mb-4"
            >
              {" "}
              {/* Added justify-center */}
              <Zap className="h-6 w-6" />
              <span>FlowForge</span>
            </a>
            <p className="text-sm">
              Automate your world. Focus on what matters.
            </p>
            <div className="flex space-x-4 mt-4 justify-center">
              {" "}
              {/* Added justify-center */}
              {/* Social Media Icons (Placeholders) */}
              <a href="#" className="hover:text-white transition-colors">
                FB
              </a>
              <a href="#" className="hover:text-white transition-colors">
                TW
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LI
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col items-center text-center">
            {" "}
            {/* Added flex, flex-col, items-center, and text-center */}
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col items-center text-center">
            {" "}
            {/* Added flex, flex-col, items-center, and text-center */}
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center text-center">
            {" "}
            {/* Added flex, flex-col, items-center, and text-center */}
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} FlowForge. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
