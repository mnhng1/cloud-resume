"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
    { id: 'about', label: 'About' },
    { id: 'background', label: 'Background' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects & Certifications' },
];

const SideNav = () => {
    const [activeSection, setActiveSection] = useState<string>('about');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const observers = new Map();

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setActiveSection(id);
                        }
                    },
                    { threshold: 0.5 }
                );
                observer.observe(element);
                observers.set(id, observer);
            }
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Dots */}
            <div className="flex flex-col gap-4">
                {sections.map(({ id }) => (
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className="relative group"
                    >
                        <div 
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-200",
                                activeSection === id 
                                    ? "bg-primary" 
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground"
                            )}
                        />
                    </button>
                ))}
            </div>

            {/* Hover Panel */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="absolute right-8 top-0  -translate-y-0 bg-card border rounded-lg shadow-lg p-4 min-w-40"
                    >
                        <div className="flex flex-col gap-4">
                            {sections.map(({ id, label }) => (
                                <button
                                    key={id}
                                    onClick={() => scrollToSection(id)}
                                    className={cn(
                                        "text-left transition-colors duration-200 hover:text-primary",
                                        activeSection === id 
                                            ? "text-primary font-medium" 
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SideNav;