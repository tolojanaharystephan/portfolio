import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Education } from "@/components/sections/Education";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { fetchGitHubProfile } from "@/lib/github";

export default async function Home() {
  const githubProfile = await fetchGitHubProfile();
  const avatarUrl = githubProfile?.user.avatar_url;

  return (
    <>
      <Navbar />
      <main>
        <Hero avatarUrl={avatarUrl} />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects githubRepos={githubProfile?.repos} />
        <GitHubSection profile={githubProfile} />
        <Education />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
