import { Routes, Route } from "react-router-dom";

import { Home, Layout, About, Projects } from './components';

import "./index.css";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
