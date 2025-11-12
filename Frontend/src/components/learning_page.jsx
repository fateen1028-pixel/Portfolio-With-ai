
import {
    Brain, Code, Sparkles, Github, Linkedin, Mail, ChevronRight,
    Database, Cpu, TrendingUp, BookOpen, X, Menu, Terminal,
    Award, Target, Camera, BarChart, GraduationCap, Star, Trophy
} from 'lucide-react';

const LearningPage = () => {
    const learningPath = [
        { area: 'Deep Learning Fundamentals', platform: 'Coursera & YouTube', topics: ['Neural Networks', 'Backpropagation', 'Optimization', 'Transformers'], status: 'In Progress', color: 'blue' },
        { area: 'Mathematics for ML', platform: 'Self Study', topics: ['Linear Algebra', 'Calculus', 'Probability', 'Statistics'], status: 'Ongoing', color: 'purple' },
        { area: 'PyTorch & Transformers', platform: 'Hugging Face & Docs', topics: ['Model Architecture', 'Fine-tuning', 'Training', 'Deployment'], status: 'In Progress', color: 'green' },
        { area: 'Big Data Processing', platform: 'Apache Spark Docs', topics: ['PySpark', 'DataFrames', 'RDD', 'Spark vs Pandas'], status: 'Completed', color: 'cyan' }
    ];
    const resources = [
        { name: 'Coursera', type: 'Online Learning', icon: <Award size={24} /> },
        { name: 'YouTube', type: 'Video Tutorials', icon: <BookOpen size={24} /> },
        { name: 'Hugging Face', type: 'ML Models & Docs', icon: <Brain size={24} /> },
        { name: 'Free AI/ML Courses', type: 'Structured Learning', icon: <TrendingUp size={24} /> }
    ];
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">Continuous Growth</div>
                    <h1 className="text-5xl font-bold mb-4 text-gray-900">Learning Journey</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">Committed to continuous learning in AI, machine learning, and software development</p>
                </div>
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3"><TrendingUp className="text-green-600" />Current Focus Areas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {learningPath.map((path, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900">{path.area}</h3>
                                    <span className={`px-3 py-1 bg-${path.color}-100 text-${path.color}-700 rounded-full text-sm font-medium`}>{path.status}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-4 font-medium">{path.platform}</p>
                                <div className="flex flex-wrap gap-2">
                                    {path.topics.map((topic, i) => ( <span key={i} className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700">{topic}</span> ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3"><BookOpen className="text-blue-600" />Learning Resources</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {resources.map((resource, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">{resource.icon}</div>
                                <h4 className="font-bold text-gray-900 mb-2">{resource.name}</h4>
                                <p className="text-sm text-gray-600">{resource.type}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LearningPage;