"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    period: string;
    bullets: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Software Developer",
        company: "BUILD UMass",
        location: "Amherst, MA",
        period: "Aug 2024 – Present",
        bullets: [
            "Developing an AI-powered search interface using modern web technologies to improve asset discovery",
        ]
    },
    {
        title: "Teaching Assistant",
        company: "University of Massachusetts",
        location: "Amherst, MA",
        period: "Sept 2024 – Present",
        bullets: [
            "Providing guidance and support for undergraduate computer science students in object-oriented programming",
        ]
    }
];

const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="space-y-8">
            <motion.h2 
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Experience
            </motion.h2>
            
            <div className="space-y-6">
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card 
                            className={`p-6 transition-all duration-300 ${
                                hoveredIndex === index 
                                    ? 'shadow-xl bg-accent/10 scale-[1.02] -translate-y-1' 
                                    : 'hover:shadow-md'
                            }`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="space-y-4">
                                {/* Header */}
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-semibold">
                                            {experience.title}
                                        </h3>
                                        <div className="text-muted-foreground">
                                            <span>{experience.company}</span>
                                            <span className="mx-2">•</span>
                                            <span>{experience.location}</span>
                                        </div>
                                    </div>
                                    <span className="text-muted-foreground text-sm px-2 py-1 bg-accent/10 rounded-md">
                                        {experience.period}
                                    </span>
                                </div>
                                
                                {/* Bullet Points */}
                                <ul className="space-y-2">
                                    {experience.bullets.map((bullet, bulletIndex) => (
                                        <motion.li 
                                            key={bulletIndex} 
                                            className="flex items-start gap-2 text-muted-foreground"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: index * 0.1 + bulletIndex * 0.1 }}
                                        >
                                            <span className="mt-1.5 text-accent-foreground">•</span>
                                            <span>{bullet}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;