import React, { useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { projects } from "../data/mock";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#0a0a0b] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Full-stack applications showcasing real-world problem solving and modern web development practices
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-sm transition-all duration-500 ${
                hoveredProject === project.id
                  ? "border-blue-500/50 shadow-2xl shadow-blue-500/20 scale-[1.02]"
                  : "hover:border-blue-500/30"
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Project Info */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Featured Project</span>
                    </div>
                    <CardTitle className="text-2xl text-white mb-3">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                 <div className="flex flex-wrap gap-3">
  {project.demoLink && (
    <Button
      variant="outline"
      size="sm"
      className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
      onClick={() => window.open(project.demoLink, "_blank")}
    >
      <ExternalLink size={16} className="mr-2" />
      Live Demo
    </Button>
  )}

  {project.githubLink && (
    <Button
      variant="outline"
      size="sm"
      className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
      onClick={() => window.open(project.githubLink, "_blank")}
    >
      <Github size={16} className="mr-2" />
      View Code
    </Button>
  )}
</div>
                </div>

                {/* Key Achievements */}
                <div className="space-y-4">
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider">Key Achievements</h4>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-colors duration-300"
                      >
                        <ChevronRight className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
                        <p className="text-gray-400 text-sm leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;