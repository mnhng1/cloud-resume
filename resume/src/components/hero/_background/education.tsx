import { Card } from "@/components/ui/card";

const educationItems: {
    title: string;
    institution: string;
    period: string;
    description: string | string[];
}[] = [
    {
        title: "University of Massachusetts, Amherst",
        institution: "Amherst, MA",
        period: "Expected 2027",
        description: [
            "On Chancellor's Scholarship (64,000 USD/year)",
            "Bachelor of Science in Computer Science",
            "GPA: 3.97",
            "Dean's List (Fall 2023, Spring 2024, Fall 2024)"
        ]
    },
    {
        title: "American Internation School of Vietnam",
        institution: "Ho Chi Minh City, Vietnam",
        period: "Class of 2023",
        description: ["IBDP 39/45", "High School Diploma", "Honors Diploma", "Honors Roll for 4 years"]
    },
];

const Education = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {educationItems.map((item, index) => (
                <Card key={index} className="p-6 space-y-4">
                    <div>
                        <h3 className="font-semibold text-xl">{item.title}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                        <p className="text-sm text-muted-foreground">{item.period}</p>
                    </div>
                    <ul className="text-muted-foreground list-disc pl-4">
                        {Array.isArray(item.description) ? (
                            item.description.map((description, index) => (
                                <li key={index}>{description}</li>
                            ))
                        ) : (
                            <li>{item.description}</li>
                        )}
                    </ul>
                </Card>
            ))}
        </div>
    );
};

export default Education;