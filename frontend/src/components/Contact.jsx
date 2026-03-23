import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <section className="px-4 py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-home-green/5 -skew-y-2 transform origin-top-left -z-10"></div>
            <div className="max-w-4xl mx-auto glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden border border-white/50 shadow-lg">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-home-green/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
                <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to kick off?</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">I'm currently available for freelance work and full-time opportunities. Let's build something championship-worthy together.</p>
                <Link 
                    to="mailto:sandeepshine865@gmail.com?subject=Hiring Inquiry&body=Hi, I would like to discuss a project..."
                    className="contents"
                >

                    <button className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-home-green text-slate-900 font-bold text-base hover:bg-home-green/90 shadow-lg shadow-home-green/30 transition-all">
                    Start a Conversation
                    </button>
                </Link>
            </div>
        </section>
    
    )
}
