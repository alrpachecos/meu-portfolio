import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/public/logo.png';

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold">
              <Image
                src={Logo}
                alt="Logomarca AR&P"
                height={80}
                quality={100}
              />
            </Link>
            <p className="mt-4 text-muted-foreground">
              Desenvolvedor Front-End e Mobile especializado em criar
              experiências digitais excepcionais.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#sobre"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#habilidades"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="#projetos"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projetos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/alrpachecos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/andre-resende-b58781101/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; Andre Resende {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
