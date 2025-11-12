import {Github, Linkedin, Mail} from "lucide-react";
import React from "react";

const ContactPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-gray-50 pt-20">
        <div className="max-w-5xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">Let's Connect</div>
                <h1 className="text-5xl font-bold mb-4 text-gray-900">Get In Touch</h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">Interested in collaborating or discussing opportunities? Let's start a conversation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center group">
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Github className="text-white" size={32} /></div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">GitHub</h3>
                    <p className="text-gray-600">View my repositories</p>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center group">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Linkedin className="text-white" size={32} /></div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">LinkedIn</h3>
                    <p className="text-gray-600">Connect professionally</p>
                </a>
                <a href="mailto:your.email@example.com" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 text-center group">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"><Mail className="text-white" size={32} /></div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
                    <p className="text-gray-600">Send a message</p>
                </a>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Open to Opportunities</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    I'm always interested in discussing new projects, innovative ideas, and opportunities in machine learning,
                    web development, and data science. Whether you have a question, collaboration proposal, or just want to
                    connect, feel free to reach out.
                </p>
                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">ML Projects</span>
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium">Web Development</span>
                    <span className="px-4 py-2 bg-green-50 text-green-700 rounded-lg font-medium">Data Science</span>
                    <span className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg font-medium">Open Source</span>
                </div>
            </div>
        </div>
    </div>
);
export default ContactPage;