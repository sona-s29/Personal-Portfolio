import { Badge } from "./ui/badge";
import { skills } from "../data/mock";
import {
  Code,
  Database,
  Layout,
  Lightbulb,
  Server,
  Wrench,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    { title: "Languages", icon: Code, skills: skills.languages, color: "blue" },
    { title: "Frontend", icon: Layout, skills: skills.frontend, color: "cyan" },
    { title: "Backend", icon: Server, skills: skills.backend, color: "blue" },
    { title: "Database", icon: Database, skills: skills.database, color: "cyan" },
    { title: "Tools & Platforms", icon: Wrench, skills: skills.tools, color: "blue" },
    { title: "Core Concepts", icon: Lightbulb, skills: skills.concepts, color: "cyan" },
  ];

  const colorMap = {
    blue: "text-blue-400",
    cyan: "text-cyan-400",
  };

  return (
    <section id="skills" className="py-24 bg-[#0f0f10]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="text-blue-400">Skills</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="
                  group relative rounded-xl p-[1px]
                  bg-gradient-to-r from-blue-500/30 via-blue-400/20 to-cyan-400/30
                  hover:from-blue-500/60 hover:to-cyan-500/60
                  transition-all duration-300
                "
              >
                {/* Inner Card */}
                <div className="
                  bg-[#111111]
                  rounded-xl
                  p-6
                  h-full
                  transition-all duration-300
                  group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
                ">
                  
                  {/* Title */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition">
                      <Icon className={`${colorMap[category.color]}`} size={22} />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        className="
                          bg-transparent
                          text-gray-300
                          border border-blue-400/20
                          hover:border-blue-400/50
                          hover:text-white
                          transition-all duration-200
                          px-2.5 py-1
                          text-xs
                          rounded-md
                        "
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;