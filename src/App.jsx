import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {
 
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>

      <p className="text-gray-500 text-center mt-20">@Ankit Jindal</p>
    </div>
  )
}

export default App
