import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  liveUrl, 
  githubUrl, 
  image, 
  index 
}: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 0 25px rgba(255, 24, 24, 0.4)"
      }}
    >
      <div className="aspect-video bg-gradient-to-br from-muted to-card relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 border-2 border-primary/30 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full animate-pulse" />
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={18} />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink size={18} />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-titillium font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-muted text-muted-foreground font-inter text-sm rounded-full border border-border group-hover:border-primary/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;