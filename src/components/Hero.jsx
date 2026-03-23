import React from "react";
import { Github, Linkedin, Mail, MapPin, Download, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { personalInfo } from "../data/mock";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[#0a0a0b]">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-4xl">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <MapPin size={16} className="text-blue-500" />
            <span className="text-sm text-gray-300">{personalInfo.location}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            {personalInfo.subtitle}
          </h2>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105"
              onClick={scrollToProjects}
            >
              View Projects
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>
           <a
  href="https://drive.google.com/file/d/1D4VVbenzKMC4rWNrtzwSGXCNmjrpWeKS/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
  download
  className="flex items-center space-x-2 text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
>
  <Download size={20} />
  <span className="text-sm">Download Resume</span>
</a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;