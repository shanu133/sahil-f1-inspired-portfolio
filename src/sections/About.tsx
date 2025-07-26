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
            <span className="font-inter text-primary font-medium text-lg tracking-wider mb-4 block">
              ABOUT THE DRIVER
            </span>
            <h2 className="font-titillium font-black text-4xl md:text-6xl text-foreground mb-6">
              PERFORMANCE PROFILE
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  Like a Formula 1 driver pushing the limits on every corner, I approach 
                  development with precision, speed, and an obsession for performance. 
                  Every line of code is optimized for maximum efficiency.
                </p>
                
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  My engineering philosophy combines the methodical approach of a race 
                  engineer with the creative problem-solving of a championship driver. 
                  From React frontends to Node.js backends, I build solutions that 
                  perform under pressure.
                </p>

                <div className="pt-6">
                  <h3 className="font-titillium font-bold text-2xl text-foreground mb-4">
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
                        <span className="font-inter text-muted-foreground">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
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
                  <div className="font-titillium font-black text-3xl text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
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