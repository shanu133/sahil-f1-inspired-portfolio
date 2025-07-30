import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  percentage: number;
  index: number;
}

const SkillBar = ({ skill, percentage, index }: SkillBarProps) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-body font-medium text-foreground">{skill}</span>
        <span className="font-heading font-bold text-primary">{percentage}%</span>
      </div>
      
      <div className="relative h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-red-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/60 to-red-400/60 rounded-full blur-sm"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;