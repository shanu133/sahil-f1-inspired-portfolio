import { motion } from 'framer-motion';
import SkillBar from '../components/SkillBar';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const frontendSkills = [
    { skill: "React.js", percentage: 95 },
    { skill: "TypeScript", percentage: 90 },
    { skill: "Next.js", percentage: 88 },
    { skill: "Tailwind CSS", percentage: 92 },
    { skill: "JavaScript ES6+", percentage: 94 },
  ];

  const backendSkills = [
    { skill: "Node.js", percentage: 90 },
    { skill: "Express.js", percentage: 88 },
    { skill: "MongoDB", percentage: 85 },
    { skill: "PostgreSQL", percentage: 82 },
    { skill: "GraphQL", percentage: 78 },
  ];

  const toolsSkills = [
    { skill: "Git & GitHub", percentage: 95 },
    { skill: "Docker", percentage: 80 },
    { skill: "AWS", percentage: 75 },
    { skill: "Jest Testing", percentage: 85 },
    { skill: "Webpack/Vite", percentage: 88 },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-body text-primary font-medium text-lg tracking-[1.5px] mb-4 block">
              <span className="text-primary">02 //</span> TECHNICAL SPECIFICATIONS
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6 tracking-[1.5px]">
              PERFORMANCE METRICS
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Like a Formula 1 car's telemetry data, here are my technical capabilities 
              measured in precision and performance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-8 text-center tracking-[1.5px]">
                FRONTEND
              </h3>
              <div className="bg-card border border-border rounded-lg p-6">
                {frontendSkills.map((item, index) => (
                  <SkillBar
                    key={item.skill}
                    skill={item.skill}
                    percentage={item.percentage}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-8 text-center tracking-[1.5px]">
                BACKEND
              </h3>
              <div className="bg-card border border-border rounded-lg p-6">
                {backendSkills.map((item, index) => (
                  <SkillBar
                    key={item.skill}
                    skill={item.skill}
                    percentage={item.percentage}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-8 text-center tracking-[1.5px]">
                TOOLS & DEPLOYMENT
              </h3>
              <div className="bg-card border border-border rounded-lg p-6">
                {toolsSkills.map((item, index) => (
                  <SkillBar
                    key={item.skill}
                    skill={item.skill}
                    percentage={item.percentage}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;