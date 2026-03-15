import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
// import { Projects } from './components/Projects'; // Comentado para futura implementação
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          {/* <Projects /> // Comentado para futura implementação */}
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;