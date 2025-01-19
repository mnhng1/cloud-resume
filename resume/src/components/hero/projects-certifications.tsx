"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface ProjectItem {
    title: string;
    event?: string;
    technologies: string[];
    bullets: string[];
}

interface CertificationItem {
    title: string;
    issuer: string;
    status: "Completed" | "Ongoing";
    details?: string[];
}

const projects: ProjectItem[] = [
    {
        title: "UFound",
        event: "HackUMass 2024",
        technologies: ["NodeJS", "Express", "MongoDB", "Tesseract.js", "React"],
        bullets: [
            "Led development of a full-stack lost and found application with real-time updates and notification system for a university campus",
            
        ]
    },
    {
        title: "ReCal",
        technologies: ["Python", "Django", "React", "PostgreSQL", "Docker", "TailwindCSS"],
        bullets: [
            "Built an AI-powered event management platform integrating natural language processing for simplified scheduling",
           
        ]
    },
    {
        title: "TuneSync",
        technologies: ["Python", "Django", "SQLite3", "Webpack", "React", "Websocket"],
        bullets: [
            "Developed a full-stack web application enabling real-time collaborative media playback across multiple platforms",
        ]
    }
];

const certifications: CertificationItem[] = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        status: "Ongoing"
    }, 
    
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        status: "Completed",
        details: ["Front-end development fundamentals", "Responsive design principles"]
    },
    {
        title: "Back End Development and APIs",
        issuer: "freeCodeCamp",
        status: "Completed",
        details: ["Node.js", "Express", "MongoDB", "Mongoose"]
    },
    
];

const ProjectsAndCertifications = () => {
    const [activeTab, setActiveTab] = useState<'projects' | 'certifications'>('projects');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="space-y-8">
            <motion.h2 
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Projects & Certifications
            </motion.h2>

            {/* Tab Navigation */}
            <div className="flex gap-4 border-b">
                <button
                    onClick={() => setActiveTab('projects')}
                    className={`pb-2 px-4 ${activeTab === 'projects' 
                        ? 'border-b-2 border-primary font-semibold' 
                        : 'text-muted-foreground'
                    }`}
                >
                    📂 Projects
                </button>
                <button
                    onClick={() => setActiveTab('certifications')}
                    className={`pb-2 px-4 ${activeTab === 'certifications' 
                        ? 'border-b-2 border-primary font-semibold' 
                        : 'text-muted-foreground'
                    }`}
                >
                    🏆 Certifications
                </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
                {activeTab === 'projects' ? (
                    // Projects
                    projects.map((project, index) => (
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
                                    <div>
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-xl font-semibold">
                                                {project.title}
                                                {project.event && (
                                                    <span className="text-muted-foreground ml-2 text-sm">
                                                        | {project.event}
                                                    </span>
                                                )}
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <Badge 
                                                    key={techIndex}
                                                    variant="outline"
                                                    className="bg-accent"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Bullet Points */}
                                    <ul className="space-y-2">
                                        {project.bullets.map((bullet, bulletIndex) => (
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
                    ))
                ) : (
                    // Certifications
                    certifications.map((cert, index) => (
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
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-semibold">{cert.title}</h3>
                                            <p className="text-muted-foreground">{cert.issuer}</p>
                                        </div>
                                        <Badge 
                                            variant={cert.status === 'Completed' ? 'default' : 'secondary'}
                                        >
                                            {cert.status}
                                        </Badge>
                                    </div>
                                    
                                    {cert.details && (
                                        <ul className="space-y-2">
                                            {cert.details.map((detail, detailIndex) => (
                                                <motion.li 
                                                    key={detailIndex} 
                                                    className="flex items-start gap-2 text-muted-foreground"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: index * 0.1 + detailIndex * 0.1 }}
                                                >
                                                    <span className="mt-1.5 text-accent-foreground">•</span>
                                                    <span>{detail}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </Card>
                        </motion.div>
                    ))
                )}
            </div>
        </section>
    );
};

export default ProjectsAndCertifications;