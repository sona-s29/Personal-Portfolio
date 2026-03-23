import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { skills } from "../data/mock";
import { Code, Database, Layout, Lightbulb, Server, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: skills.languages,
      color: "blue"
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: skills.frontend,
      color: "cyan"
    },
    {
      title: "Backend",
      icon: Server,
      skills: skills.backend,
      color: "blue"
    },
    {
      title: "Database",
      icon: Database,
      skills: skills.database,
      color: "cyan"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: skills.tools,
      color: "blue"
    },
    {
      title: "Core Concepts",
      icon: Lightbulb,
      skills: skills.concepts,
      color: "cyan"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0f0f10] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 group"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 bg-${category.color}-500/10 rounded-lg group-hover:bg-${category.color}-500/20 transition-colors duration-300`}>
                      <Icon className={`text-${category.color}-500`} size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 hover:border-blue-500/50 transition-all duration-200 hover:scale-105 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
