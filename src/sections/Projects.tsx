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

  const projects = [
    {
      title: "RaceTrack Analytics",
      description: "Real-time Formula 1 telemetry dashboard with live data visualization, performance analytics, and predictive modeling for race strategy optimization.",
      technologies: ["React", "Node.js", "Socket.io", "D3.js", "MongoDB"],
      liveUrl: "https://racetrack-analytics.demo",
      githubUrl: "https://github.com/alexracer/racetrack-analytics",
    },
    {
      title: "Velocity E-Commerce",
      description: "High-performance e-commerce platform with sub-second load times, advanced caching strategies, and seamless payment integration.",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
      liveUrl: "https://velocity-store.demo",
      githubUrl: "https://github.com/alexracer/velocity-ecommerce",
    },
    {
      title: "Apex Task Manager",
      description: "Team collaboration platform with real-time updates, advanced project tracking, and performance metrics inspired by F1 team coordination.",
      technologies: ["React", "GraphQL", "Node.js", "PostgreSQL", "Docker"],
      liveUrl: "https://apex-tasks.demo",
      githubUrl: "https://github.com/alexracer/apex-tasks",
    },
    {
      title: "Circuit Social Network",
      description: "Social platform for racing enthusiasts with live chat, event coordination, and performance comparison features.",
      technologies: ["Vue.js", "Express", "Socket.io", "MongoDB", "AWS S3"],
      liveUrl: "https://circuit-social.demo",
      githubUrl: "https://github.com/alexracer/circuit-social",
    },
    {
      title: "Turbo Portfolio CMS",
      description: "Headless CMS designed for creative professionals with drag-and-drop interface, dynamic content management, and API-first architecture.",
      technologies: ["React", "Strapi", "PostgreSQL", "Cloudinary", "Vercel"],
      liveUrl: "https://turbo-cms.demo",
      githubUrl: "https://github.com/alexracer/turbo-cms",
    },
    {
      title: "Pit Stop Scheduler",
      description: "Advanced scheduling application with conflict detection, resource optimization, and automated notifications for service businesses.",
      technologies: ["Angular", "NestJS", "MySQL", "Redis", "SendGrid"],
      liveUrl: "https://pitstop-scheduler.demo",
      githubUrl: "https://github.com/alexracer/pitstop-scheduler",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-inter text-primary font-medium text-lg tracking-wider mb-4 block">
              RACE VICTORIES
            </span>
            <h2 className="font-titillium font-black text-4xl md:text-6xl text-foreground mb-6">
              PROJECT SHOWCASE
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Each project represents a victory lap in my development journey. 
              Built for speed, designed for performance, engineered for excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                index={index}
              />
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              className="px-8 py-4 border-2 border-primary text-primary font-inter font-semibold text-lg rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW ALL PROJECTS
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;