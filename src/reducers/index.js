import {combineReducers} from 'redux'
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITES, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT, SET_SHOW_FORM, SET_PET } from '../actions'

const initialMoviesState = {
    list : [], 
    favourites : [],
    showFavourites : false,
    showForm : false,
    showPet : 'default'
}
export function movies(state = initialMoviesState, action){
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list : action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES : return {
            ...state,   
            list : action.movies,
 
        }
        case SET_PET : return{
            ...state,
            showPet : action.movie
        }
        
        case ADD_FAVOURITE :

        return {
            ...state,
            favourites  : [action.movie, ...state.favourites]
        }

        case REMOVE_FAVOURITE :
            const filterArr = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            ) 
        return{
            ...state,
            favourites : filterArr
        }
        case SET_SHOW_FAVOURITES :
            return {
                ...state,
                showFavourites : action.val,
                showForm : false
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list],
            };
        case SET_SHOW_FORM:
            return {
                ...state,
                showForm : true,
                showFavourites : false
            };
        default : return state
    }
}
const initialSearchState = {
    result : [{}],
    showSearchResults : false
}
export function search(state = initialSearchState, action){
    switch (action.type) {
        case ADD_SEARCH_RESULT:
          return {
            ...state,
            result: action.results,
            showSearchResults: true,
          };
        case ADD_MOVIE_TO_LIST:
          return {
            ...state,
            showSearchResults: false,
          };
        default:
          return state;
      }
}
// const initialRootState = {
//     movies : initialMoviesState,
//     search : initialSearchState
// }
// export default function rootReducer(state = initialRootState,action){
//     return {
//         movies : movies(state.movies, action),
//         search : search(state.search, action)
//     }
// }
export default combineReducers({
    movies,
    search
});