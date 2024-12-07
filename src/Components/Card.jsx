import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
const Card = ({ data }) => {
  const { dispatch, state } = useContextGlobal();
  const findFav = state.favs.find((fav) => fav.id === data.id);
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
        dispatch({ type: findFav ? "DELETE_FAV" : "SET_FAVS", payload: data });
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={`/detail/${data.id}`}>
        <h3>{data.name}</h3>
        <h4>{data.username}</h4>
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav ⭐
      </button>
    </div>
  );
};

export default Card;
