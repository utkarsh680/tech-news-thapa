const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        isLoading: false,
        // nbpages : action.payload.nbpages
      };
  }
  return state;
};

export default reducer;
