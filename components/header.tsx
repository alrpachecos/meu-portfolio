'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/public/logo.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <Image
            src={Logo}
            alt="Logomarca AR&P"
            height={80}
            quality={100}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#sobre"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#habilidades"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Habilidades
          </Link>
          <Link
            href="#projetos"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="#contato"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Contato
          </Link>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="ml-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#sobre"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              Sobre
            </Link>
            <Link
              href="#habilidades"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              Habilidades
            </Link>
            <Link
              href="#projetos"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              Projetos
            </Link>
            <Link
              href="#contato"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
