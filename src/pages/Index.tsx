import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { WhyMe } from "@/components/WhyMe";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ProjectForm } from "@/components/ProjectForm";

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);

  return (
    <main className="min-h-screen bg-background">
      <Navbar onStart={openForm} />
      <Hero onStart={openForm} />
      <About />
      <FeaturedProjects />
      <WhyMe />
      <FAQ />
      <CTA onStart={openForm} />
      <Footer />
      <FloatingWhatsApp />
      <ProjectForm open={formOpen} onClose={() => setFormOpen(false)} />
    </main>
  );
};

export default Index;
