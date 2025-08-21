import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "API-powered app that tracks real-time weather data for Uber Drivers. Includes a check demand feature for current area.",
    image: "/projects/Weather-project.png",
    tags: ["React", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "FDM Timesheets App",
    description:
      "Collaborated with a team to create an app for FDM that tracks time and attendance. The app includes a user-friendly interface for employees to log their hours and a dashboard for managers to review timesheets.",
    image: "/projects/FDM-project.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "GreenPact Cloud Project",
    description:
      "An environment-focused app that helps users track CO₂ waste, provides eco-friendly tips, and suggests sustainable alternatives. Deployed using React, Docker, Terraform, and CI/CD automation on AWS.",
    image: "/projects/GreenPact.png",
    tags: ["React", "Docker", "Terraform", "AWS", "CI/CD"],
    demoUrl: "#",
    githubUrl: "https://github.com/HamzaAlsoodani/Environment-project#",
    showLinks: true, // 👈 flag for showing links only on this project
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* ✅ Only show links if project has `showLinks: true` */}
                {project.showLinks && (
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
