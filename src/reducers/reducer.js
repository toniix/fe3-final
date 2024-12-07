const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: state.theme === "#12121296" ? "#FFFFFF" : "#12121296",
      };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAV": //Accion extra
      const filterFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      return { ...state, favs: filterFavs };
    default:
      return state;
  }
};

export default reducer;