import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import GithubContributions from "./components/GithubContributions"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <GithubContributions />
      <Contact />
    </>
  );
}
