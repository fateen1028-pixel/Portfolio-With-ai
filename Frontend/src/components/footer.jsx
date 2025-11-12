
import {
    Brain, Code, Sparkles, Github, Linkedin, Mail, ChevronRight,
    Database, Cpu, TrendingUp, BookOpen, X, Menu, Terminal,
    Award, Target, Camera, BarChart, GraduationCap, Star, Trophy
} from 'lucide-react';

const Footer = () => (
    <footer className="bg-gradient-to-r from-blue-50 via-gray-50 to-indigo-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 lg:py-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="text-center lg:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Mohamed Fateen . F</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1 max-w-xs sm:max-w-none mx-auto lg:mx-0">Building Intelligent Solutions with AI & Web Technologies</p>
                </div>
                <div className="flex justify-center gap-5 sm:gap-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 hover:scale-110 transition-transform"><Github size={22} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 hover:scale-110 transition-transform"><Linkedin size={22} /></a>
                    <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-indigo-700 hover:scale-110 transition-transform"><Mail size={22} /></a>
                </div>
            </div>
            <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-gray-500 text-xs sm:text-sm">
                © {new Date().getFullYear()} Mohamed Fateen. All rights reserved.
            </div>
        </div>
    </footer>
);
export default Footer;