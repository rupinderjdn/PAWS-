import React from "react";
import {addFavourite,removeFavourite} from '../actions';

class MovieCard extends React.Component {
    handleFavouriteClick = ()=>{
        const {movie} = this.props;
        this.props.dispatch(addFavourite(movie));
      
    }
    handleUnFavouriteClick = ()=>{
        const {movie} = this.props;
        this.props.dispatch(removeFavourite(movie));
    }
    render(){
        const {movie, isFavourite} = this.props
        // console.log(movie)
        return (
            <div className="shadow card col-sm-3 m-2 p-2 rounded-pill overflow-hidden">
                {/* <div className="row"> */}
                    <div className="col-sm-12">
                        <img className="img-fluid w-70"  src={movie.photo['full']}/>
                    </div>
                    <div className="col-sm-12 d-flex flex-column justify-content-end align-items-center fs-4">
                        <div className="card-body ">
                        <h3 className="card-title">Name : {movie.name} </h3>
                            {/* <h3 className="card-title"> </h3> */}
                            {/* <small className="text-muted">WEig{movie.weight}</small> */}
                            {/* <h5 className="card-title">Favourite Food</h5>
                            <p className="card-text">{movie.favoriteFood}</p> */}
                            <h5 className="card-title">Weight</h5>
                            <p className="card-text">{movie.weight} Pound</p>
                            {/* <h5 className="card-title">Writers</h5>
                            <p className="card-text">{movie.Writer}</p>
                            <h5 className="card-title">Director</h5>
                            <p className="card-text">{movie.Director}</p> */}
                            <div className="footer d-flex justify-content-center">
                                {/* <div className="rating">IMDB : {movie.imdbRating}</div> */}
                                {
                                    isFavourite
                                    ? <button className="btn btn-danger rounded fw-bolder" onClick={this.handleUnFavouriteClick}><h4>Retrieve</h4></button>
                                    : <button className="btn btn-info fw-bolder rounded" onClick={this.handleFavouriteClick}><h4>Adopt</h4></button>
                                }
                                
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        )
    }  
}
  
  export default MovieCard;
  