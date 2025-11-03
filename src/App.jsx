import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import ProjectsGrid from "./components/ProjectsGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0E14]">
      <Navbar />
      <main>
        <Hero3D />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
