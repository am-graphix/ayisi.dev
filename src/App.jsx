import { useState } from 'react'
import Navbar from './components/Navbar'
import DiscoverMike from './components/DiscoverMike'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import Gallery from './sections/Gallery'
import Posts from './sections/Posts'
import Contact from './sections/Contact'

export default function App() {
  const [mikeOpen, setMikeOpen] = useState(false)

  return (
    <div className="noise min-h-screen">
      <Navbar onDiscoverMike={() => setMikeOpen(true)} />
      <DiscoverMike open={mikeOpen} onClose={() => setMikeOpen(false)} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Gallery />
        <Posts />
        <Contact />
      </main>
    </div>
  )
}
