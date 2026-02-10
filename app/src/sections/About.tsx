import { GraduationCap, Briefcase, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Passionate About <span className="text-gradient">AI & Machine Learning</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a Machine Learning Engineer with expertise in designing and implementing 
              end-to-end ML solutions. From data preprocessing to model deployment, I specialize 
              in creating efficient AI systems that solve real-world problems.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Currently at{' '}
              <span className="text-blue-600 font-semibold">AxcelerateAI</span>, I work on 
              cutting-edge machine learning solutions with focus on computer vision and 
              generative AI. My background in Electrical Engineering from{' '}
              <span className="text-purple-600 font-semibold">NUST</span> gives me a strong 
              foundation in both hardware and software systems.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I thrive on solving complex AI challenges and continuously learning new technologies. 
              Whether it's building YOLO-based detection systems, implementing LLM integrations, 
              or deploying models on edge devices, I'm always up for the challenge.
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span>Available for opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Code className="w-5 h-5 text-purple-600" />
                <span>Open source contributor</span>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Current Role */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    National University of Sciences and Technology (NUST)
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    Bachelor of Science in Electrical Engineering
                  </p>
                  <p className="text-sm text-gray-600">
                    Relevant Coursework: Machine Learning, Computer Vision, Object Oriented Programming (C++, C)
                  </p>
                </div>
              </div>
            </div>

            {/* Current Role Card */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Junior Machine Learning Engineer
                  </h3>
                  <p className="text-purple-600 font-medium mb-2">
                    AxcelerateAI · Lahore, Pakistan
                  </p>
                  <p className="text-sm text-gray-600">
                    Designing and implementing end-to-end ML solutions with hardware acceleration
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Project */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    FPGA-Based Leukemia Detection
                  </h3>
                  <p className="text-green-600 font-medium mb-2">
                    Final Year Project
                  </p>
                  <p className="text-sm text-gray-600">
                    Achieved 93% accuracy with MobileNetV2 CNN deployed on Xilinx Spartan-6 FPGA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
