
import About from "@/components/hero/_about/about";
import Background from "@/components/hero/background";
import Experience from "@/components/hero/experiences";
import ProjectsAndCertifications from "@/components/hero/projects-certifications";

import NavBar from "@/components/navbar/navbar";
import SideNav from "@/components/navbar/side-nav";


const Home = () => {
  return ( 
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <NavBar/>
        <main className="space-y-16 py-12">
          <section id="about">
            <About/>
          </section>
          <section id="background">
            <Background/>
          </section>
          <section id="experience">
            <Experience/>
          </section>
          <section id="projects">
            <ProjectsAndCertifications/>
          </section>
        </main>
      </div>
      <SideNav />
    </div>
  );
}

 
export default Home;
