// context creation ✅
// provieder ✅
// consumer(eliminate) => useContext Hook

import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/reducer";
let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "CSS",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchApiData = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
        },
      });
    } catch {
      console.log("error", error);
    }
  };

  // to remove the post 
 const removePost = (Post_Id) =>{
  dispatch({
    type: "REMOVE_POST",
    payload : Post_Id
  })
 }

 //search

 const searchPost = (searchQuery) => {
  dispatch({
    type:"SEARCH_QUERY",
    payload: searchQuery
  });
 }

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query]);
  return (
    <AppContext.Provider value={{ ...state, removePost, searchPost}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
