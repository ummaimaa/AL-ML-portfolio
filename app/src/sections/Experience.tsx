import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Junior Machine Learning Engineer',
    company: 'AxcelerateAI',
    location: 'Lahore, Pakistan',
    period: 'July 2025 – Present',
    description: 'Designing and implementing end-to-end machine learning solutions, including data preprocessing, model development, evaluation, and deployment. Documenting experiments, model architectures, and optimizing model performance.',
    skills: ['End-to-end ML pipelines', 'Model deployment', 'Hardware acceleration', 'MLOps'],
  },
  {
    title: 'Machine Learning Intern (Remote)',
    company: 'SYSVIT',
    location: 'Rawalpindi, Pakistan',
    period: 'July 2024 - August 2024',
    description: 'Worked on machine learning tools and Python-based projects, applying core concepts to real-world tasks and academic scenarios.',
    skills: ['Python', 'ML Tools', 'Data Analysis'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            My Professional <span className="text-gradient">Journey</span>
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
