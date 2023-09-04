// Ici, a la partie principale de la page,
// entre le footer et le header, qui contiendra toutes
// les sections de notre page
// On a pas besoin de mettre de style, car il est déjà
// compris dans chaque section.
/* Sections */
import About from "./sections/About";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <main>
      <About />
      <Skills />
    </main>
  );
}
