import { Navbar } from "./Components/Elements/Navbar.jsx";
import { Principal } from "./Components/Principal.jsx";
import { About } from "./Components/About.jsx";
import { Projects } from "./Components/Projects.jsx";
import { Skills } from "./Components/Skills.jsx";
import { Experience } from "./Components/Experience.jsx";
import { Contact } from "./Components/Contact.jsx";

function App() {
  return (
    <>
     <Navbar></Navbar>

     <Principal></Principal>

     <a name="about"></a>
     <About></About>

     <a name="projects"></a>
     <Projects></Projects>

     <a name="skills"></a>
      <Skills></Skills>
      
      <a name="experience"></a>
      <Experience></Experience>
      
      <a name="contact"></a>
      <Contact></Contact>
    </>
  );
}

export default App;
