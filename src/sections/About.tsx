import { motion } from 'framer-motion';
import { Code, Zap, Target, Trophy } from 'lucide-react';

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

  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Zap, label: "Years Experience", value: "5+" },
    { icon: Target, label: "Success Rate", value: "98%" },
    { icon: Trophy, label: "Awards Won", value: "12" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-body text-primary font-medium text-lg tracking-[1.5px] mb-4 block">
              <span className="text-primary">01 //</span> DRIVER PROFILE
            </span>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-foreground mb-6 tracking-[1.5px]">
              PERFORMANCE PROFILE
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            <motion.div variants={itemVariants} className="z-10">
              <div className="space-y-6">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  A passionate and driven final-year Computer Science Engineering student with a deep-seated love for building efficient, high-performance software solutions. My approach to development mirrors the precision and focus of a race engineer, meticulously architecting systems that are both robust and scalable.
                </p>
                
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  My engineering philosophy combines the methodical approach of a race 
                  engineer with the creative problem-solving of a championship driver. 
                  From React frontends to Node.js backends, I build solutions that 
                  perform under pressure.
                </p>

                <div className="pt-6">
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-4 tracking-[1.5px]">
                    CORE EXPERTISE
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "React & Next.js",
                      "Node.js & Express",
                      "TypeScript",
                      "MongoDB & PostgreSQL",
                      "AWS & Docker",
                      "Performance Optimization"
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="font-body text-muted-foreground">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ferrari F1 Car Animation */}
            <motion.div 
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="relative lg:absolute lg:right-0 lg:-mr-24 lg:top-1/2 lg:-translate-y-1/2"
            >
              <img 
                src="/lovable-uploads/0462a144-0ac3-4b88-b9fd-d4abf7e3e187.png"
                alt="Ferrari F1 Car" 
                className="max-w-lg mx-auto w-full h-auto object-contain"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(255, 24, 24, 0.2)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-heading font-black text-3xl text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;