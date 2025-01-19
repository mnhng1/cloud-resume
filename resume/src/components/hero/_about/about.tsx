import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes"
const About = () => {
    const { setTheme } = useTheme()
    return (
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 items-center">
            <div className="relative aspect-square">
                <Image
                    src="/logo/portraitlogo.svg"
                    alt="Profile picture"
                    fill
                    className="object-contain"
                /> 
            </div>
            
            <div className="space-y-6">
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold">hey there, <span className="text-muted-foreground hover:underline transition-all" onClick={() => {setTheme("light")}}>im Minh!</span></h1>
                    <p className="text-xl text-muted-foreground">
                       A student and an aspiring software engineer
                    </p>
                    <p className="text-lg text-muted-foreground">
                        Currently exploring new things...
                    </p>
                </div>
                
                <div className="flex gap-4">
                    <Link href="https://github.com/mnhng1" target="_blank">
                        <Card className="inline-flex items-center gap-2 p-3 hover:bg-accent transition-colors">
                            <FaGithub className="text-2xl"/>
                            <span>Github Portfolio</span>
                        </Card>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                        <Card className="inline-flex items-center gap-2 p-3 hover:bg-accent transition-colors">
                            <FaLinkedin className="text-2xl"/>
                            <span>LinkedIn</span>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;