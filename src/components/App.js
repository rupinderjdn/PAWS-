import MovieCard from './MovieCard';
import React from 'react';
import Navbar from './Navbar.js';
import { data } from '../util/data';
import { addMovies, setShowFavourite, setShowForm } from '../actions';
import Form from './Form';
import Footer from './Footer';

class App extends React.Component {
  componentDidMount() {
    // make an API call
    // dispatch an action

    const { store } = this.props;
    store.dispatch(addMovies(data));
    store.subscribe(() => {
      // console.log("UPDATED")
      // will be called after dispatch function
      console.log("State", this.props.store.getState())
      this.forceUpdate();
      // console.log(store.getState());
      // this function should not be used in general
    })
    
    // ideally we should avoid hardcoding dispatch function
  }
  isMovieFavourite(movie) {
    const { movies } = this.props.store.getState();
    const {favourites }= movies;
    return favourites.indexOf(movie) >= 0;
  }
  changeTab(val){
    this.props.store.dispatch(setShowFavourite(val))
  }
  displayForm(){
    this.props.store.dispatch(setShowForm());
  }
  render() {
    // return 'a';
    // componentDidMount()
    const {movies,search} = this.props.store.getState(); // {movies : {list,favourites,showFavourites} , search : {results}}

    const {list, favourites, showFavourites, showForm, showPet} = movies
    var displayMovies = showFavourites ? favourites : list;
    if(showPet==='D' || showPet ==='C' || showPet=='R'){
      displayMovies = displayMovies.filter((movie)=>{
        return movie.id.charAt(0)===showPet;
      })
    }
    return (
      <div id="app"className="App">
        <Navbar store ={this.props.store} search={search}/>
        <div className="container-fluid my-3">
          <div className="container row">
            <div className="col-md-4 rounded d-flex justify-content-center my-1 fs-5 "><button className="btn btn-primary" onClick={() => this.changeTab(false)}>Available</button></div>
            <div className="col-md-4 rounded d-flex justify-content-center  my-1 fs-5 "><button className="btn btn-primary" onClick={() => this.changeTab(true)}>Adopted</button></div>
            <div className="col-md-4 rounded d-flex justify-content-center my-1 fs-5 "><a href="#footer"className="btn btn-danger" onClick={() => this.displayForm()}>Add For Adoption</a></div>
        </div>
        <div  className="d-flex justify-content-center flex-row flex-wrap my-4">
          { !showForm?
            displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)} />
            )): <Form store = {this.props.store}/>}
        </div>
        
      </div>
  
      < Footer />
      </div >
    );
  }
}

export default App;
