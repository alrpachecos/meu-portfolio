'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  const skills = [
    { name: 'JavaScript', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'React', category: 'frontend' },
    { name: 'NextJs', category: 'frontend' },
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
    { name: 'React Native', category: 'mobile' },
    { name: 'Redux', category: 'state' },
    { name: 'Firebase', category: 'backend' },
    { name: 'Github', category: 'tools' },
    { name: 'Git', category: 'tools' },
    { name: 'REST API', category: 'api' },
    { name: 'Shadcn', category: 'ui' },
    { name: 'Styled Components', category: 'ui' },
    { name: 'Tailwind CSS', category: 'ui' },
    { name: 'Responsive Design', category: 'ui' },
    { name: 'UI/UX', category: 'design' },
  ];

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'language', name: 'Linguagens' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'ui', name: 'UI' },
    { id: 'backend', name: 'Backend' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'tools', name: 'Ferramentas' },
    { id: 'api', name: 'APIs' },
    { id: 'state', name: 'State Management' },
    { id: 'design', name: 'Design' },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="habilidades" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeIn}
            custom={0}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Minhas Habilidades
          </motion.h2>
          <motion.div
            variants={fadeIn}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6"
          />
          <motion.p
            variants={fadeIn}
            custom={2}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Tecnologias e ferramentas que utilizo para criar soluções
            web e mobile de alta qualidade.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          custom={3}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn}
              custom={index + 4}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant="secondary"
                className="bg-[#06b6d4] hover:bg-[#06b6d4] px-4 py-2 text-base font-medium rounded-sm"
              >
                {skill.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          custom={skills.length + 5}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          <div className="col-span-full">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Principais Áreas de Expertise
            </h3>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-4">
              Desenvolvimento Frontend
            </h4>
            <p className="text-muted-foreground">
              Criação de interfaces modernas, responsivas e de alta
              performance utilizando React, NextJs e outras
              tecnologias frontend avançadas.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-4">
              Desenvolvimento Mobile
            </h4>
            <p className="text-muted-foreground">
              Criação de aplicativos multiplataforma com React Native,
              focando em experiência do usuário e performance em
              diferentes dispositivos.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-4">
              Integração com APIs
            </h4>
            <p className="text-muted-foreground">
              Experiência em integrar aplicações com diferentes tipos
              de APIs e serviços, garantindo comunicação eficiente
              entre frontend e backend.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
