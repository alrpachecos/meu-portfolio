'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Sistema DalyGames',
      description:
        'Sistema web para jogos, com listagem de jogos e jogos em destaque.',
      image: '/dalygames-image.png?height=400&width=600',
      tags: ['NextJs', 'TypeScript', 'Tailwind Css'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Sistema Ticketly',
      description:
        'Sistema para controle de chamados, com registro de usuário e controle de rotas',
      image: '/ticketly-image.png?height=400&width=600',
      tags: ['NextJs', 'Firebase', 'CSS'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Sistema DevMotors',
      description:
        'Sistema para oficinas automotivas com agendamento de serviços como troca de óleo e manutenção preventiva',
      image: '/oficina-image.png?height=400&width=600',
      tags: ['NextJs', 'TypeScript', 'Sass'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="projetos" className="py-20 bg-background">
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
            Projetos em Destaque
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
            Conheça alguns dos projetos que desenvolvi utilizando as
            tecnologias mais modernas do mercado.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeIn}
              custom={index + 3}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-[#06b6d4] rounded-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          custom={projects.length + 4}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/alrpachecos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              Ver mais projetos no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
