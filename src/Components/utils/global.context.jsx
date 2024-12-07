import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../../reducers/reducer";

export const ContextGlobal = createContext(undefined);

const localFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  theme: "#12121296",
  data: [],
  loading: true,
  favs: localFavs,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //  el local storage
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  // CONSUMIENDO LA API
  const url = `https://jsonplaceholder.typicode.com/users`;
  useEffect(() => {
    axios.get(url).then((response) => {
      dispatch({ type: "SET_DATA", payload: response.data });
      console.log(response.data);
      dispatch({ type: "SET_LOADING", payload: false });
    });
  }, []);

  return (
    <ContextGlobal.Provider
      value={{ state, dispatch }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
