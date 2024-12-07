import { Routes, Route } from "react-router-dom";
import { useContextGlobal } from "./Components/utils/global.context";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import Layout from "./Layouts/Layout";
import Detail from "./Routes/Detail";


function App() {
  const { state } = useContextGlobal();
  const { theme } = state;

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme,
        color: theme === "#12121296" ? "#FFFFFF" : "#000000"
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
