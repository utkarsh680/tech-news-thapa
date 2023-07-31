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
        nbPages : action.payload.nbPages
      };
    case "REMOVE_POST":
      return{
        ...state,
        hits: state.hits.filter((curElem) => 
          curElem.objectID !== action.payload
        )
      }

    case "SEARCH_QUERY":
      return{
        ...state,
        query: action.payload
      }

    case "NEXT_PAGE":
      let pageNumInc = state.page +1;
      if(pageNumInc >= state.nbPages){
        pageNumInc = 0
      }
      return{
        ...state,
        page : pageNumInc
      }

     case "PREV_PAGE":
      let pageNumbDec = state.page - 1;
      if(pageNumbDec <= 0){
        pageNumbDec = 0;
      }
      return {
        ...state,
        page :pageNumbDec
      } 
  
  }
  return state;
};

export default reducer;
