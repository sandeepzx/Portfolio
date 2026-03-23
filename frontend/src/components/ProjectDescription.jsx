import React from 'react'

export default function ProjectDescription({ data }) {
    return (
        <div className="glass-card rounded-2xl overflow-hidden p-8 shadow-xl shadow-home-green/5">
            <div className="flex flex-col gap-6">
                <div className="space-y-4">
                    <h3 className="text-slate-900 text-2xl font-bold">Game Strategy</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        {data}
                    </p>
                </div>
            </div>
        </div>
    )
}
