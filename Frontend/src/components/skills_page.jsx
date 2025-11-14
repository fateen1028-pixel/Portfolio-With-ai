import {BarChart, Brain, Camera, Code, Cpu, Database, Sparkles, Terminal,Cloud} from "lucide-react";
import React from "react";

const SkillsPage = () => {
    // Removed Flask and updated AI/Web skills
    const skills = [
    { 
        category: 'Programming & Scripting', 
        icon: <Terminal className="text-blue-600" size={32} />, 
        color: 'blue', 
        items: ['Python', 'JavaScript', 'C', 'Git', 'Linux CLI'] 
    },
    { 
        category: 'Machine Learning', 
        icon: <Brain className="text-purple-600" size={32} />, 
        color: 'purple', 
        items: ['Scikit-learn', 'Linear & Logistic Regression', 'Decision Trees', 'Clustering & Classification', 'Model Evaluation & Metrics'] 
    },
    { 
        category: 'Deep Learning & AI', 
        icon: <Cpu className="text-indigo-600" size={32} />, 
        color: 'indigo', 
        items: ['PyTorch', 'Transformers', 'CNNs, RNNs, LSTMs', 'Attention Mechanisms', 'Model Fine-tuning'] 
    },
    { 
        category: 'Computer Vision', 
        icon: <Camera className="text-pink-600" size={32} />, 
        color: 'pink', 
        items: ['OpenCV', 'Image Processing', 'Object Detection', 'Feature Extraction', 'Real-time Vision Apps'] 
    },
    { 
        category: 'Big Data & Data Engineering', 
        icon: <Database className="text-cyan-600" size={32} />, 
        color: 'cyan', 
        items: ['Apache Spark', 'PySpark', 'Pandas', 'ETL Pipelines', 'Large Dataset Handling'] 
    },
    { 
        category: 'Web Development', 
        icon: <Code className="text-green-600" size={32} />, 
        color: 'green', 
        items: ['React + Vite', 'TailwindCSS', 'Frontend Design', 'JavaScript/TypeScript', 'SaaS Frontend Design'] 
    },
    { 
        category: 'AI Integration & Tools', 
        icon: <Sparkles className="text-orange-600" size={32} />, 
        color: 'orange', 
        items: ['LangChain', 'RAG', 'Hugging Face Ecosystem', 'Prompt Engineering', 'Generative Models (Gemini, GPT)'] 
    },
    { 
        category: 'Data Visualization', 
        icon: <BarChart className="text-teal-600" size={32} />, 
        color: 'teal', 
        items: ['Matplotlib', 'Seaborn', 'Plotly', 'Interactive Dashboards', 'Data Storytelling'] 
    },
    { 
        category: 'AI Deployment & Cloud DevOps', 
        icon: <Cloud className="text-gray-600" size={32} />, 
        color: 'gray', 
        items: ['Flask / FastAPI', 'Streamlit', 'AWS / Azure', 'Docker Basics', 'Full Stack AI App Deployment'] 
    }
];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">Technical Expertise</div>
                    <h1 className="text-5xl font-bold mb-4 text-gray-900">Skills & Technologies</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">A diverse toolkit spanning AI, web development, and data systems</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                            <div className={`w-14 h-14 bg-${skill.color}-100 rounded-xl flex items-center justify-center mb-4`}>{skill.icon}</div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">{skill.category}</h3>
                            <ul className="space-y-3">
                                {skill.items.map((item, i) => ( <li key={i} className="text-gray-600 flex items-center gap-2"><div className={`w-1.5 h-1.5 rounded-full bg-${skill.color}-500`}></div>{item}</li> ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default SkillsPage;