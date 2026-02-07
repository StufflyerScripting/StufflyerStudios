"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Zap, Mail, ExternalLink, Code2, Music, Gamepad2, Menu, X, ChevronUp, Layers, Cpu, Sparkles } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Roblox Games",
      description: "I have created many Roblox games when I started programming.",
      tags: ["Luau", "Game Development"],
      link: "#",
      icon: <Gamepad2 className="w-6 h-6" />
    },
    {
      title: "Sepynode Programming Language",
      description: "A compiler for a programming language a friend and I are making.",
      tags: ["C++", "Computer Architecture"],
      link: "https://sepynode.org/",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Uniblokz Java & C++",
      description: "A fun physics exploration game I made for learning computer graphics.",
      tags: ["OpenGL", "LWJGL", "GLAD", "Java", "C++"],
      link: "#",
      icon: <Layers className="w-6 h-6" />
    },
  ];

  const skills = [
    { name: "Java", icon: <Code2 className="w-5 h-5" />, color: "bg-orange-100 text-orange-600" },
    { name: "C++/C", icon: <Cpu className="w-5 h-5" />, color: "bg-blue-100 text-blue-600" },
    { name: "Luau", icon: <Code2 className="w-5 h-5" />, color: "bg-red-100 text-red-600" },
    { name: "Music Composing", icon: <Music className="w-5 h-5" />, color: "bg-purple-100 text-purple-600" },
    { name: "Basic Web Dev", icon: <Code2 className="w-5 h-5" />, color: "bg-green-100 text-green-600" },
    { name: "Computer Graphics", icon: <Layers className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-600" }
  ];

  const interests = [
    { name: "Speedcubing", icon: <Zap className="w-5 h-5" /> },
    { name: "Music Composition", icon: <Music className="w-5 h-5" /> },
    { name: "Language Learning", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Parkour", icon: <Sparkles className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ImStufflyer
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">Skills</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#about" className="block py-2 text-slate-600 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#projects" className="block py-2 text-slate-600 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#skills" className="block py-2 text-slate-600 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#contact" className="block py-2 text-slate-600 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Low-level Developer & Music Composer
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">stufflyer</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Crafting systems, games, and melodies with code
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button className="gap-2" onClick={() => window.location.href = '#contact'}>
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => window.open('https://github.com/StufflyerScripting', '_blank')}>
              <Github className="w-4 h-4" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-3xl">About Me</CardTitle>
            <CardDescription>A passionate developer with a love for creating systems</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed mb-6">
              I'm a young low-level programmer and music composer with 5+ years of experience in game development, computer graphics, and systems programming. I thrive on understanding how things work under the hood and creating efficient, elegant solutions.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Beyond Coding</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                    <div className="text-blue-600">
                      {interest.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-700">{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-slate-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg text-blue-600">
                    {project.icon}
                  </div>
                  {project.link && project.link !== "#" && (
                    <button
                      onClick={() => window.open(project.link, '_blank')}
                      className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
                      aria-label="Open project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <Card key={index} className="border-slate-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardContent className="flex items-center gap-3 p-6">
                <div className={`p-2 rounded-lg ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="font-medium text-slate-900">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-slate-200 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Let's Work Together</CardTitle>
            <CardDescription className="text-lg mt-2">
              I'm always open to discussing new projects and opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => window.location.href = 'mailto:leonardcardze@gmail.com'}
              >
                <Mail className="w-4 h-4" />
                leonardcardze@gmail.com
              </Button>
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => window.open('https://github.com/StufflyerScripting', '_blank')}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-600">
          <p>© 2026 ImStufflyer. Built with Next.js, React, and shadcn/ui</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {mounted && showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
