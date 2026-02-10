import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/30 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting */}
          <p className="text-lg text-gray-600 mb-4 animate-fade-in">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Ummaima Nadeem</span>
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">
            Machine Learning Engineer | AI & Data Science
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-gray-600 mb-8 text-lg leading-relaxed">
            Specializing in{' '}
            <span className="text-blue-600 font-semibold">deep learning</span>,{' '}
            <span className="text-purple-600 font-semibold">computer vision</span>, and{' '}
            <span className="text-pink-600 font-semibold">generative AI</span>{' '}
            with expertise in Python, TensorFlow, and end-to-end ML pipeline development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href="https://linkedin.com/in/ummaimanadeem"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/ummaimaa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:ummaima83@gmail.com"
              className="p-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">3+</p>
              <p className="text-sm text-gray-600 mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">10+</p>
              <p className="text-sm text-gray-600 mt-1">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">93%</p>
              <p className="text-sm text-gray-600 mt-1">Model Accuracy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
