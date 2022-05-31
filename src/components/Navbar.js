import React from "react";
import {setPetShow} from '../actions'; 

class Navbar extends React.Component {
    // constructor (props){
    //     super(props)
    //     this.state = {
    //         showSearchResults : false,
    //         searchText: ''
    //     }
    // }
    // handleAddToMovies = (movie)=>{
    //     this.props.store.dispatch(handleMovieAdd(movie));
        
    //     this.setState({
    //         showSearchresults : false,
    //     })
    
    // }
    // handleSearch = (e) =>{
    //     e.preventDefault()
    //     const {searchText} = this.state;
    //     // console.log(this.props.store)
    //     this.props.store.dispatch(handleMovieSearch(searchText));
    // }
    // handleChange = (e) => {
    //     this.setState({
    //         searchText : e.target.value
    //     })
    // }
    handleClick(pet){
        console.log(pet);
        this.props.store.dispatch(setPetShow(pet));
    }
    render(){
        // const {search} = this.props.search()
        // const { showSearchResults } = this.state;
        const {result, showSearchResults} = this.props.search;
        // console.log("hey this are results",result);
        // if(result.length>1)console.log("first result : ",result[0])
        return (
            <nav className="navbar  navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand col-2" href="#"><h1>PAWS+</h1></a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse show col-10" id="navbarBasic">
                    <ul className="navbar-nav d-flex flex-row justify-content-center me-auto mb-2 mb-xl-0">
                        <li className="nav-item">
                        <a className="petLink nav-link" aria-current="page" href="#" onClick={()=>this.handleClick('D')}>Dogs</a>
                        </li>
                        <li className="nav-item">
                        <a className="petLink nav-link" href="#" onClick={()=>this.handleClick('C')}>Cats</a>
                        </li>
                        <li className="nav-item">
                        <a className="petLink nav-link " href="#" onClick={()=>this.handleClick('R')} >Rabbits</a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        )
    }  
}
  
  export default Navbar;
  