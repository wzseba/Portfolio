import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex">
      <header className="flex-none w-14 h-14">
        <h1>Encabezado</h1>
      </header>

      <nav className="flex-initial w-32">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
