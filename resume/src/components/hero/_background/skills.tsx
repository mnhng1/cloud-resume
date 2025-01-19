import { Card } from "@/components/ui/card";

const expertiseItems = [
    {
        title: "Software Development",
        skills: [ "TypeScript",  'Python',  'Java', 'C', "Javascript"],
        description:""
    },
    {
        title: "Database Management",
        skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite3", "Supabase"],
        description: ""
    },
    {
        title: "Frameworks, Libraries",
        skills: ["React", "Nextjs",  "Node.js", "Django", "Material-UI", "TailwindCSS", "FastAPI", "Spring", "SpringBoot"],
        description: "*Currently learning Spring/SpringBoot =D"
    },
    
    {
        title: "Developer Tools",
        skills: ["Git, Docker", "Google Cloud Platform", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"],
        description: ""
    },
];

const Skills = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertiseItems.map((item, index) => (
                <Card key={index} className="p-6 space-y-4">
                    <div>
                        <h3 className="font-semibold text-xl">{item.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {item.skills.map((skill, skillIndex) => (
                                <span 
                                    key={skillIndex}
                                    className="px-2 py-1 bg-accent rounded-md text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                </Card>
            ))}
        </div>
    );
};

export default Skills;