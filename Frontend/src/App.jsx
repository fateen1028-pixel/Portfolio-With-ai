import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { 
    Brain, Code, Sparkles, Github, Linkedin, Mail, ChevronRight, 
    Database, Cpu, TrendingUp, BookOpen, X, Menu, Terminal, 
    Award, Target, Camera, BarChart, GraduationCap, Star, Trophy
} from 'lucide-react';
import CertificationsPage from "./components/certificate.jsx";
import HomePage from "./components/home.jsx";
import SkillsPage from "./components/skills_page.jsx";
import ProjectsPage from "./components/Projects_Page.jsx";
import LearningPage from "./components/learning_page.jsx";
import ContactPage from "./components/contact_page.jsx";
import Footer from "./components/footer.jsx";
import Chatbot  from "./components/chatbot.jsx";

// Simple Router Implementation
const Router = ({ children }) => {
    const [path, setPath] = useState(window.location.hash.slice(1) || '/');

    useEffect(() => {
        const handleHashChange = () => setPath(window.location.hash.slice(1) || '/');
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return children(path, setPath);
};

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

// Navigation Component
const Navigation = ({ currentPath }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Automatically close the menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/skills", label: "Skills" },
        { path: "/projects", label: "Projects" },
        { path: "/learning", label: "Learning" },
        { path: "/certifications", label: "Certifications" },
        { path: "/contact", label: "Contact" },
        { path: "/aiChatbot", label: "Get in with AI" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm fade-down transition-all duration-500">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-9 h-9 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5 animate-pulse"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                        </svg>
                    </div>
                    <span className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Skillset
          </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`relative font-medium transition-all duration-300 nav-hover ${
                                currentPath === item.path
                                    ? "text-blue-600"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`font-medium ${
                                currentPath === item.path
                                    ? "text-blue-600"
                                    : "text-gray-700 hover:text-blue-500"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};
// Main App
export default function App() {
    return (
        <Router>
            {(path) => (
                <>
                    <Navigation currentPath={path} />
                    {path === '/' && <HomePage />}
                    {path === '/skills' && <SkillsPage />}
                    {path === '/projects' && <ProjectsPage />}
                    {path === '/learning' && <LearningPage />}
                    {path === '/contact' && <ContactPage />}
                    {path === '/certifications' && <CertificationsPage />}
                    {path === '/aiChatbot' && <Chatbot/>}
                    {/* The route for '/get-with-ai' is removed */}

                    <Footer />
                </>
            )}
        </Router>
    );
}