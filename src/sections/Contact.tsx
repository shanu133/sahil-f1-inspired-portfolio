import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "worksahilsharma@gmail.com",
      href: "mailto:worksahilsharma@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone", 
      value: "+91 7017340383",
      href: "tel:+917017340383"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dehradun, Uttarakhand",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-body text-primary font-medium text-lg tracking-[1.5px] mb-4 block">
              <span className="text-primary">04 //</span> GET IN TOUCH
            </span>
            <h2 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-6 tracking-[1.5px]">
              CONTACT ZONE
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={itemVariants}>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-8 tracking-[1.5px]">
                GET IN TOUCH
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-body font-medium text-foreground">
                        {info.label}
                      </div>
                      <div className="font-body text-muted-foreground">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/10 to-red-400/10 border border-primary/20 rounded-lg">
                <h4 className="font-heading font-bold text-xl text-foreground mb-3 tracking-[1.5px]">
                  RESPONSE TIME
                </h4>
                <p className="font-body text-muted-foreground mb-2">
                  Average response time: <span className="text-primary font-semibold">2-4 hours</span>
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  I treat every project like a race - speed and precision are everything.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body font-medium text-foreground mb-2">
                    NAME
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label className="block font-body font-medium text-foreground mb-2">
                    EMAIL
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your.email@example.com"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label className="block font-body font-medium text-foreground mb-2">
                    MESSAGE
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-lg rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group tracking-[1.5px]"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;