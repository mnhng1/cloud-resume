"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import Transition from "@/components/ui/transition";
import Education from "@/components/hero/_background/education";
import Skills from "@/components/hero/_background/skills";
import Coursework from "./_background/coursework";
import { MdLaptop } from "react-icons/md";
import { FaSchool } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
const categories = [
    { id: 'skills', label: 'Skills', icon: <MdLaptop/>},
    { id: 'education', label: 'Education', icon: <FaSchool/> },
    { id: 'coursework', label: 'Taken Coursework', icon: <FaBook/>},
];

type CategoryId = (typeof categories)[number]['id'];


const Background = () => {
    const [activeCategory, setActiveCategory] = useState<CategoryId>('skills');
    const renderContent = () => {
        return (
            <AnimatePresence mode="wait">
                {activeCategory === 'skills' && (
                    <Transition key="skills">
                        <Skills />
                    </Transition>
                )}
                {activeCategory === 'education' && (
                    <Transition key="education">
                        <Education />
                    </Transition>
                )}
                
                {activeCategory === 'coursework' && (
                    <Transition key="coursework">
                        <Coursework/>
                    </Transition>
                )}
            </AnimatePresence>
        );  
    };
    return (
        <section className="space-y-8">
            <h2 className="text-3xl font-bold">Background</h2>
            
            <div className="flex gap-4 flex-wrap">
                {categories.map((category) => (
                    <Button
                        key={category.id}
                        variant="ghost"
                        onClick={() => setActiveCategory(category.id)}
                        className={cn(
                            "text-lg",
                            activeCategory === category.id && "bg-accent"
                        )}
                    >
                        <span className="mr-2">{category.icon}</span>
                        {category.label}
                    </Button>
                ))}
            </div>
            
            <div className="mt-8">
                {renderContent()}
            </div>
        </section>
    );
}

export default Background;