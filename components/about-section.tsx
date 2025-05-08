'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Smartphone, Zap } from 'lucide-react';

export function AboutSection() {
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
    <section id="sobre" className="py-20 bg-background">
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
            Sobre Mim
          </motion.h2>
          <motion.div
            variants={fadeIn}
            custom={1}
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-6"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
            custom={2}
            className="space-y-6"
          >
            <p className="text-lg">
              Sou André Resende, Desenvolvedor Front-End e Mobile com
              uma sólida trajetória em tecnologias modernas de
              desenvolvimento web e mobile.
            </p>
            <p className="text-lg">
              Tenho profundo interesse em explorar novas tecnologias e
              traduzi-las em soluções práticas e inovadoras para
              projetos, sempre buscando excelência técnica e impacto
              positivo.
            </p>
            <p className="text-lg">
              Minha abordagem é centrada na satisfação do cliente e na
              criação de experiências que realmente fazem a diferença.
              Estou sempre em constante evolução, investindo no
              aprimoramento das minhas habilidades para contribuir de
              forma significativa para o sucesso dos projetos que
              integro.
            </p>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeIn}
              custom={3}
            >
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Desenvolvimento Web
                    </h3>
                    <p className="text-muted-foreground">
                      Criação de interfaces modernas e responsivas
                      utilizando as melhores práticas e tecnologias
                      atuais.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeIn}
              custom={4}
            >
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-lg">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Desenvolvimento Mobile
                    </h3>
                    <p className="text-muted-foreground">
                      Aplicativos multiplataforma com foco em
                      performance e experiência do usuário.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeIn}
              custom={5}
            >
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Soluções Inovadoras
                    </h3>
                    <p className="text-muted-foreground">
                      Transformação de ideias complexas em soluções
                      práticas e eficientes para problemas reais.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
