import { motion } from 'framer-motion';
import SkillBar from '../components/SkillBar';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const carVariants = {
    hidden: { 
      opacity: 0, 
      x: -100, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    },
  };


  const skills = [
    { name: "React & TypeScript", percentage: 90 },
    { name: "Node.js & Express", percentage: 85 },
    { name: "Python & Django", percentage: 80 },
    { name: "MongoDB & PostgreSQL", percentage: 85 },
    { name: "AWS & Docker", percentage: 75 },
    { name: "Performance Optimization", percentage: 88 }
  ];

  return (
    <section id="about" className="py-32 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-left"
        >
          <motion.div variants={itemVariants} className="mb-16">
            <span className="font-body text-primary font-medium text-lg tracking-[1.5px] mb-4 block">
              <span className="text-primary">01 //</span> ABOUT ME
            </span>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6 tracking-[1.5px]">
              DRIVER PROFILE
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - About Me Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-6">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Currently in my final year of a B.Tech at DIT University, my work is fueled by a genuine passion for technology and design. For me, it's not just about writing code or creating layouts; it's about crafting experiences.
                </p>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  I'm inspired by the relentless pursuit of perfection seen in motorsport, and I bring that same energy to every project, aiming to create work that is not only functional but also engaging and innovative.
                </p>
              </div>
              
              <div className="mt-12">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-8 tracking-wide">
                  TECHNICAL PERFORMANCE
                </h3>
                {skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right side - F1 Car */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.img 
                src="/lovable-uploads/0462a144-0ac3-4b88-b9fd-d4abf7e3e187.png"
                alt="F1 Car" 
                className="max-w-3xl mx-auto w-full h-auto object-contain"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;