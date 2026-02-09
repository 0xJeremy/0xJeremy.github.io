import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "@/components/nav";
import { StickyLinks } from "@/components/StickyLinks";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { AboutMe } from "@/pages/AboutMe";
import { Contact } from "@/pages/Contact";
import { GrainBackground } from "@/components/decorations";

export const App = () => (
  <BrowserRouter basename="/sandbox">
    <GrainBackground>
      {/* NavBar is rendered globally - scrollBased on home page */}
      <NavBar scrollBased />
      {/* Sticky social links - appear on scroll, hidden on mobile */}
      <StickyLinks />
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </GrainBackground>
  </BrowserRouter>
);
