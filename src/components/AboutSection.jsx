import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Science Student at QMUL
            </h3>

            <p className="text-muted-foreground">

            </p>

            <p className="text-muted-foreground">
              Hi! I’m Hamza — a Computer Science student at Queen Mary University of London with a
              passion for technology and creating things that make life easier or more interesting.
              I've worked on a variety of projects, and I thrive on learning, solving problems, and
              pushing boundaries. I'm eager to keep developing my skills and gain hands-on experience
              in the tech industry, where I can contribute meaningfully while continuing to grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/CV/Hamza Alsoodani Tech CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View CV
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};
