import React from "react";
import {
    Brain, Code, Sparkles, Github, Linkedin, Mail, ChevronRight,
    Database, Cpu, TrendingUp, BookOpen, X, Menu, Terminal,
    Award, Target, Camera, BarChart, GraduationCap, Star, Trophy
} from 'lucide-react';

const Link = ({ to, children, className = '' }) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.hash = to;
    };

    return (
        <a href={`#${to}`} className={className} onClick={handleClick}>
            {children}
        </a>
    );
};

const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                    Computer Science & Machine Learning
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Hi, <span className="text-2xl sm:text-3xl">I am Mohamed Fateen . F</span><br />
                    Building Intelligent<br />
                    <span className="text-blue-600">
                        Solutions with <span className="text-4xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-slate-100">Skills</span>
                    </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                    I am passionate about leveraging machine learning and modern web technologies to create impactful applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link to="/projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                        View Projects <ChevronRight size={20} />
                    </Link>
                    <Link to="/contact" className="px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg border border-gray-200">
                        Get in Touch
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 w-full">
                    {[
                        { icon: <Brain className="text-blue-600" size={28} />, title: 'Machine Learning', desc: 'Regression, decision trees, and classification algorithms.' },
                        { icon: <Cpu className="text-purple-600" size={28} />, title: 'Deep Learning', desc: 'PyTorch, transformers, and neural network architectures.' },
                        { icon: <Code className="text-green-600" size={28} />, title: 'Full Stack', desc: 'Building web apps with React, Vite, and modern APIs.' },
                    ].map((card, i) => (
                        <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                            <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                                {card.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;