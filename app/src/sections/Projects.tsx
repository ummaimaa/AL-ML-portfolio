import { ExternalLink, Github, Cpu, Fish, Home, Activity, Twitter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AI-driven Leukemia Detection',
    subtitle: 'Final Year Project',
    description: 'CNN-based leukemia detection system deployed on Xilinx Spartan-6 FPGA. Trained MobileNetV2 architecture on blood smear images with hardware acceleration for real-time inference.',
    tech: ['Vivado', 'ISE Design Suite', 'TensorFlow', 'Keras', 'Roboflow'],
    highlights: ['93% accuracy achieved', 'FPGA hardware acceleration', 'RTL code generation'],
    icon: Cpu,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    gradient: 'from-green-50 to-teal-50',
    borderColor: 'border-green-200',
  },
  {
    title: 'Fish Pallet Detection',
    subtitle: 'Computer Vision Project',
    description: 'Trained a YOLO model on a custom fish-pallet dataset to perform real-time pallet detection in aquarium environments. Deployed on NVIDIA Jetson with monitoring dashboards.',
    tech: ['YOLO', 'FastAPI', 'Prometheus', 'Grafana', 'Jetson'],
    highlights: ['Real-time detection', 'Low-latency inference', 'System monitoring'],
    icon: Fish,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    gradient: 'from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200',
  },
  {
    title: 'Ha App',
    subtitle: 'Health Tracking Application',
    description: 'Built FastAPI backend with complete endpoints for health-tracking and plan-generation features. Integrated LLMs to generate personalized meal, workout, and meditation plans.',
    tech: ['FastAPI', 'MongoDB', 'LLM', 'Pydantic'],
    highlights: ['Personalized AI plans', 'Complete REST API', 'MongoDB data models'],
    icon: Activity,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    gradient: 'from-purple-50 to-pink-50',
    borderColor: 'border-purple-200',
  },
  {
    title: 'Virtual Staging Automation',
    subtitle: 'Generative AI Project',
    description: 'Developed generative models for automated virtual staging of indoor environments. Built a multi-staging pipeline to place furniture consistently across different room angles.',
    tech: ['Generative Modeling', 'Computer Vision', 'Python'],
    highlights: ['Multi-angle processing', 'Coherent scene generation', 'Automated staging'],
    icon: Home,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    gradient: 'from-orange-50 to-amber-50',
    borderColor: 'border-orange-200',
  },
  {
    title: 'Twitter API Integration',
    subtitle: 'Automation Project',
    description: 'Designed a Python script using Tweepy to authenticate via Twitter API and automate tweet posting. Deployed on AWS EC2 instance with secure API key management.',
    tech: ['Python', 'Tweepy', 'AWS EC2', 'GitHub'],
    highlights: ['Automated posting', 'AWS deployment', 'Secure key management'],
    icon: Twitter,
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-100',
    gradient: 'from-sky-50 to-blue-50',
    borderColor: 'border-sky-200',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            A selection of projects showcasing my expertise in machine learning, computer vision, and AI deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${project.gradient} rounded-2xl p-6 border ${project.borderColor} hover:shadow-lg transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 ${project.iconBg} rounded-xl`}>
                  <project.icon className={`w-6 h-6 ${project.iconColor}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">{project.subtitle}</p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.highlights.map((highlight, hIndex) => (
                  <span
                    key={hIndex}
                    className="px-3 py-1 bg-white/70 text-gray-700 text-sm font-medium rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, tIndex) => (
                  <Badge
                    key={tIndex}
                    variant="secondary"
                    className="bg-white/80 text-gray-700 hover:bg-white"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 bg-white/80 hover:bg-white"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gray-900 hover:bg-gray-800 text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
