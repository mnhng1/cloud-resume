import { Card } from "@/components/ui/card";

const couseworkItems = [
    {
        title: "Computing with Java and Python",
       
    },
    {
        title: "Computer Systems Principles",
        
    },
    {
        title: "Data Structures and Algorithms",
        
    },
    {
        title: "Object Oriented Programming with Java"
    },
    {
        title: "Programming Methodology, Software Architecture"
    }
];

const Coursework = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {couseworkItems.map((item, index) => (
                <Card key={index} className="p-6 space-y-4">
                    <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Coursework;