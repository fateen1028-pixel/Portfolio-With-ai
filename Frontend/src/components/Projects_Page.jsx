

import {
    Brain, Code, Sparkles, Github, Linkedin, Mail, ChevronRight,
    Database, Cpu, TrendingUp, BookOpen, X, Menu, Terminal,
    Award, Target, Camera, BarChart, GraduationCap, Star, Trophy
} from 'lucide-react';



const ProjectsPage = () => {
    // Removed the ML Model Web Integration project (which used Flask)
    const projects = [
        { title: 'Smart Waste Management Dashboard', description: 'Real-time monitoring dashboard for waste segregation with IoT data visualization and analytics.', tech: ['React', 'Python', 'Data Analytics', 'IoT'], color: 'green', icon: <Target size={24} /> },
        { title: 'Interactive Data Storytelling Platform', description: 'Developed a custom web platform for presenting complex data insights through animated and interactive visualizations.', tech: ['D3.js', 'React', 'Data Visualization', 'JavaScript'], color: 'purple', icon: <TrendingUp size={24} /> },
        { title: 'Computer Vision Object Detection', description: 'Developed OpenCV-based system for detecting and classifying waste types using image data.', tech: ['OpenCV', 'Python', 'Deep Learning'], color: 'pink', icon: <Camera size={24} /> },
        { title: 'LangChain AI Assistant', description: 'Built a conversational AI using LangChain and Hugging Face models for intelligent query handling.', tech: ['LangChain', 'Transformers', 'Python'], color: 'indigo', icon: <Sparkles size={24} /> },
        { title: 'PySpark Data Pipeline', description: 'Processed large datasets efficiently with Apache Spark and PySpark for real-time analytics.', tech: ['PySpark', 'Apache Spark', 'Big Data'], color: 'cyan', icon: <Database size={24} /> },
        { title: 'Data Visualization Dashboard', description: 'Interactive dashboard visualizing machine learning metrics and datasets using Plotly and React.', tech: ['Plotly', 'React', 'TailwindCSS'], color: 'teal', icon: <BarChart size={24} /> },
        { title: 'SaaS Frontend for Symposium', description: 'Responsive and elegant frontend built with React + Vite for event management and registrations.', tech: ['React', 'Vite', 'TailwindCSS'], color: 'blue', icon: <Code size={24} /> },
        { title: 'Transformer NLP Experiments', description: 'Experimented with transformer architectures and fine-tuned models for NLP and classification tasks.', tech: ['PyTorch', 'Transformers', 'Hugging Face'], color: 'orange', icon: <Cpu size={24} /> }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">Portfolio</div>
                    <h1 className="text-5xl font-bold mb-4 text-gray-900">Featured Projects</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">A showcase of applied projects in AI, computer vision, and data-driven web applications</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
                            <div className={`w-14 h-14 bg-${project.color}-100 rounded-xl flex items-center justify-center mb-6 text-${project.color}-600 group-hover:scale-110 transition-transform`}>{project.icon}</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => ( <span key={i} className="px-4 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium">{tech}</span> ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ProjectsPage;