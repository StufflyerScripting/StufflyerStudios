"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Roblox Games",
      description: "I have created many roblox games when I started programming.",
      tags: ["Luau"],
      link: "#"
    },
    {
      title: "Mooncat Chess Engine",
      description: "A free Chess Engine supposed to be customized to fit any play style.",
      tags: ["Java", "C++"],
      link: "#"
    },
    {
      title: "Uniblokz Java & C++",
      description: "A fun physics exploration game I made for learning computer graphics",
      tags: ["OpenGL", "LWJGL", "GLAD", "Java", "C++"],
      link: "#"
    },
  ];

  const skills = [
    { name: "Java", icon: <Code className="w-5 h-5" /> },
    { name: "C++/C", icon: <Zap className="w-5 h-5" /> },
    { name: "Luau", icon: <Code className="w-5 h-5" /> },
    { name: "Composing", icon: <Palette className="w-5 h-5" /> },
    { name: "Basic Web Dev", icon: <Code className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
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
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#about" className="block py-2 text-slate-600 hover:text-slate-900">About</a>
              <a href="#projects" className="block py-2 text-slate-600 hover:text-slate-900">Projects</a>
              <a href="#skills" className="block py-2 text-slate-600 hover:text-slate-900">Skills</a>
              <a href="#contact" className="block py-2 text-slate-600 hover:text-slate-900">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">stufflyer</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Low-level Programmer & Composer
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button className="gap-2">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-slate-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">About Me</CardTitle>
            <CardDescription>A passionate developer with a love for creating systems</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              I'm a young low-level programmer and music composer with 5+ years of experience in game making, computer graphics and systems. I like language learning and parkour too.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <ExternalLink className="w-5 h-5 text-slate-400 hover:text-slate-600 cursor-pointer" />
                </div>
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
            <Card key={index} className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex items-center gap-3 p-6">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
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
              <Button variant="outline" className="gap-2">
                <Mail className="w-4 h-4" />
                leonardcardze@gmail.com
              </Button>
              <Button variant="outline" className="gap-2">
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
    </div>
  );
}
