import React from "react";
import { GraduationCap, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { personalInfo, education } from "../data/mock";
import { Separator } from "./ui/separator";

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0b] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* About Content */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <User className="text-blue-500 mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Full Stack Developer</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Full Stack Developer with practical experience in React.js, Node.js, and MongoDB, building modern web applications. 
                  Focused on clean code, performance optimization, and delivering seamless user experiences.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Currently working as a Full Stack Developer Intern at Netcradus, contributing to scalable CRM solutions 
                  and enhancing both frontend responsiveness and backend API integration.
                </p>
              </div>
            </div>

            <Separator className="bg-white/10" />

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm mb-1">Email</p>
                <p className="text-gray-300 text-sm">{personalInfo.email}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Location</p>
                <p className="text-gray-300 text-sm">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div>
            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <GraduationCap className="text-blue-500" size={24} />
                  </div>
                  <CardTitle className="text-white text-xl">Education</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-blue-400 text-sm font-medium">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-gray-500 text-sm">{edu.duration}</span>
                      <span className="text-cyan-400 font-semibold text-sm">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;