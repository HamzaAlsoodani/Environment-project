import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Technical Skills
  { name: "HTML/CSS", level: 95, category: "Technical" },
  { name: "JavaScript", level: 70, category: "Technical" },
  { name: "React", level: 90, category: "Technical" },
  { name: "Python", level: 85, category: "Technical" },
  { name: "Java", level: 90, category: "Technical" },
  { name: "SQL", level: 70, category: "Technical" },
  { name: "Git/GitHub", level: 90, category: "Technical" },
  { name: "Figma", level: 85, category: "Technical" },
  // Education
  {
    name: "Computer Science BSc – QMUL",
    details: "Achieved a First in Year 1 • On track for a First in Year 2",
    level: 100,
    category: "Education",
  },
  {
    name: "A-Levels – Greenford High School",
    details: "Achieved A* Mathematics, A Biology, A Chemistry",
    level: 100,
    category: "Education",
  },
];

const categories = ["Technical", "Education"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Technical");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Slider Toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-secondary/70 rounded-full w-64 h-10 flex items-center">
            {/* Sliding background */}
            <div
              className={cn(
                "absolute top-0 left-0 h-full w-1/2 rounded-full bg-primary transition-all duration-300",
                activeCategory === "Education" && "translate-x-full"
              )}
            ></div>

            {/* Toggle buttons */}
            <button
              onClick={() => setActiveCategory("Technical")}
              className={cn(
                "z-10 w-1/2 h-full rounded-full text-sm font-medium transition-colors",
                activeCategory === "Technical"
                  ? "text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              Technical
            </button>
            <button
              onClick={() => setActiveCategory("Education")}
              className={cn(
                "z-10 w-1/2 h-full rounded-full text-sm font-medium transition-colors",
                activeCategory === "Education"
                  ? "text-primary-foreground"
                  : "text-muted-foreground"
              )}
            >
              Education
            </button>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                {skill.details && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {skill.details}
                  </p>
                )}
              </div>

              {/* Progress bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Show percentage for technical skills */}
              {skill.category === "Technical" && (
                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
