import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { experience } from "../data/mock";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0f0f10] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Work </span>
            <span className="text-blue-500">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Professional journey in full-stack development, contributing to enterprise-level applications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card
              key={exp.id}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Briefcase className="text-blue-500" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white mb-1">{exp.role}</CardTitle>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {exp.current && (
                      <Badge className="bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20">
                        Current
                      </Badge>
                    )}
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400 leading-relaxed">{responsibility}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;