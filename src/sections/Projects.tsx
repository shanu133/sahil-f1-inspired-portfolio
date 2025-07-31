import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
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


  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-body text-primary font-medium text-lg tracking-[1.5px] mb-4 block">
              <span className="text-primary">03 //</span> PROJECTS
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6 tracking-[1.5px]">
              DEVELOPMENT PIPELINE
            </h2>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center bg-card border border-border rounded-lg p-12"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4 tracking-[1.5px]">
              GARAGE IN DEVELOPMENT
            </h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              New developments are in the pipeline. The garage is busy engineering the next generation of projects. Check back soon.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;