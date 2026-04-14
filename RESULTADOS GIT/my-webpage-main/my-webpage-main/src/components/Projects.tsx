import { motion } from "framer-motion";
import { ExternalLink, GitFork, Star, Code } from "lucide-react";

const projects = [
  {
    name: "articles-app",
    description: "Web application for deploying and managing articles and blogs",
    language: "JavaScript",
    url: "https://github.com/hectorio23/articles-app",
    stars: 0,
    forks: 0
  },
  {
    name: "node-filer",
    description: "FTP server developed in Node.js for document storage",
    language: "JavaScript",
    url: "https://github.com/hectorio23/node-filer",
    stars: 0,
    forks: 0
  },
  {
    name: "py-proxy",
    description: "Proxy server written in Python for network handling",
    language: "Python",
    url: "https://github.com/hectorio23/py-proxy",
    stars: 0,
    forks: 0
  },
  {
    name: "dotfiles",
    description: "Personal Linux configuration files for Arch/Gentoo setups",
    language: "Shell",
    url: "https://github.com/hectorio23/dotfiles",
    stars: 0,
    forks: 0
  },
  {
    name: "ci-cd-practica",
    description: "CI/CD practice repository for continuous integration workflows",
    language: "YAML",
    url: "https://github.com/hectorio23/ci-cd-practica",
    stars: 0,
    forks: 0
  },
  {
    name: "pypwd",
    description: "A terminal based password manager for Unix Systems",
    language: "Python",
    url: "https://github.com/hectorio23/pypwd",
    stars: 0,
    forks: 0
  }
];

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  Python: "bg-blue-400",
  Shell: "bg-green-400",
  YAML: "bg-red-400",
  Markdown: "bg-purple-400",
  TypeScript: "bg-blue-500"
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-muted-foreground">{"{"}</span>
            <span className="text-foreground"> Projects </span>
            <span className="text-muted-foreground">{"}"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open source projects and personal experiments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 hover:bg-card/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${languageColors[project.language] || "bg-gray-400"}`} />
                  <span className="text-xs text-muted-foreground">{project.language}</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3" />
                    {project.stars}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <GitFork className="w-3 h-3" />
                    {project.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/hectorio23?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            View all repositories
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
