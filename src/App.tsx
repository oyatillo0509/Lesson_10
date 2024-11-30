import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}

export default App;