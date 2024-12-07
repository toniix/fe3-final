import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import styles from "../styles/components.module.css";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  const { theme } = state;
  // console.log(state);

  const btnClass = theme === "#12121296" ? styles.btnLight : styles.btnDark;
  const navClass = theme === "#12121296" ? styles.dark : styles.light;
  
  return (
    <nav className={navClass}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/contact">
        <h4>Contact</h4>
      </Link>
      <Link to="/favs">
        <h4>Favs</h4>
      </Link>
      <button
        className={btnClass}
        onClick={() => dispatch({ type: "SET_THEME" })}
      >
        {theme === "#12121296" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar