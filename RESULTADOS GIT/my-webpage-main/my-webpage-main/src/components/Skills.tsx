import { motion } from "framer-motion";
import { Code, Server, Shield, Terminal } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Languages",
    items: ["Python", "JavaScript", "C++", "C#", "HTML/CSS", "SQL"],
    description: "Multi-paradigm programming expertise"
  },
  {
    icon: Server,
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MariaDB", "SQLite"],
    description: "Relational database management"
  },
  {
    icon: Terminal,
    title: "Linux Power User",
    items: ["Arch Linux", "Gentoo", "Shell Scripting"],
    description: "Years of experience with advanced distros"
  },
  {
    icon: Shield,
    title: "Security",
    items: ["Pentesting Basics", "Network Security"],
    description: "Aspiring Professional Pentester"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-muted-foreground">{"<"}</span>
            <span className="text-foreground">Skills</span>
            <span className="text-muted-foreground">{" />"}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My toolbox for building efficient solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/50 hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <skill.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
