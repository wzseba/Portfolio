import { Routes, Route } from "react-router-dom";

import { Home, Layout, About } from './components';

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
