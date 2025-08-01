import { motion } from 'framer-motion';

const CoreExpertise = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    "React & Next.js",
    "Node.js & Express", 
    "TypeScript",
    "MongoDB & PostgreSQL",
    "AWS & Docker",
    "Figma",
    "Performance Optimization",
    "RESTful APIs"
  ];

  return (
    <section id="expertise" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="font-body text-primary font-medium text-lg tracking-[1.5px] mb-4 block">
              <span className="text-primary">03 //</span> CORE EXPERTISE
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6 tracking-[1.5px]">
              TECHNICAL ARSENAL
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-3 group-hover:shadow-[0_0_15px_hsl(var(--primary))] transition-all duration-300" />
                <span className="font-body text-foreground text-sm font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreExpertise;