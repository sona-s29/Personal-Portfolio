import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data/mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Section "${sectionId}" not found`);
    }
  };

  return (
    <footer className="bg-[#0a0a0b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">{personalInfo?.name || "Sona"}</span>
              <span className="text-blue-500">.</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about building scalable web applications and creating seamless user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2">
              {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-400 hover:text-blue-500 text-sm transition-colors duration-200 capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>

            <div className="flex space-x-4">

              {/* GitHub */}
              <a
                href={personalInfo?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo?.email}`}
                className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-gray-400 text-sm">
              © {currentYear} {personalInfo?.name || "Sona"}. All rights reserved.
            </p>

            <p className="text-gray-400 text-sm flex items-center">
              Built with
              <Heart size={14} className="text-red-500 mx-1 animate-pulse" />
              using React & FastAPI
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;