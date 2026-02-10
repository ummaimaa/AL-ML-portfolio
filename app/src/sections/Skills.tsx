import { 
  Brain, 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Layers, 
  Wrench,
  Users
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    icon: Brain,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    skills: ['Deep Learning', 'Computer Vision', 'Generative AI', 'Model Evaluation', 'Hyperparameter Tuning'],
  },
  {
    title: 'Programming Languages',
    icon: Code,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    skills: ['Python', 'C++', 'C', 'Verilog'],
  },
  {
    title: 'LLMs & AI Tools',
    icon: Layers,
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-100',
    skills: ['Groq LLM', 'Gemini APIs', 'Hugging Face', 'Prompt Engineering', 'LLM Integration'],
  },
  {
    title: 'Model Deployment & MLOps',
    icon: Server,
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    skills: ['FastAPI', 'Replicate', 'Gradio', 'Docker', 'Locust', 'MLflow'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    iconColor: 'text-sky-600',
    iconBg: 'bg-sky-100',
    skills: ['AWS (EC2, S3)', 'CI/CD Basics'],
  },
  {
    title: 'Backend & Data Engineering',
    icon: Database,
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    skills: ['Pydantic Models', 'MongoDB', 'Pandas', 'NumPy'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Wrench,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-100',
    skills: ['TensorFlow', 'Scikit-learn', 'Keras', 'PyTorch', 'ONNX', 'OpenCV', 'YOLO', 'MediaPipe'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-100',
    skills: ['Project Management', 'Time Management', 'Leadership', 'Teamwork', 'Problem Solving', 'Communication'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            A comprehensive toolkit built through hands-on experience in machine learning, AI, and software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${category.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <category.icon className={`w-6 h-6 ${category.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 mb-3">{category.title}</h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2">Certifications</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Professional <span className="text-gradient">Credentials</span>
            </h3>
            <p className="max-w-2xl mx-auto text-gray-600 mt-2">
              Continuous learning and skill development through industry-recognized programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Certification 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">HP</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Data Science and Analytics</h4>
                  <p className="text-blue-600 text-sm mb-2">HP Life — HP Foundation · 2023</p>
                  <p className="text-gray-600 text-sm">
                    Learned foundational concepts of data science, data-driven decision making, and basic data visualization techniques using real-world scenarios.
                  </p>
                </div>
              </div>
            </div>

            {/* Certification 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-lg">eH</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Machine Learning, AI, and Data Science Certification</h4>
                  <p className="text-purple-600 text-sm mb-2">eHunar · 2023</p>
                  <p className="text-gray-600 text-sm">
                    Completed a comprehensive certification covering core concepts of Artificial Intelligence, Machine Learning, Data Science, and Python.
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
