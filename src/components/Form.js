import React from "react";
import {addMovieToList, handleMovieAdd, handleMovieSearch} from '../actions'; 
import { movies } from "../reducers";

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email : '@gmail.com',
            petName : '',
            petWeight : '',
            ImageLink : '',
            PetType : 'Dog'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        // console.log(value)
        this.setState({
            [name] : value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const email = this.state.email;
        const name = this.state.petName;
        const weight = this.state.petWeight;
        const petType = this.state.PetType;
        const full = this.state.ImageLink;
        const photo ={full}

        const {movies} = this.props.store.getState();
        const {list} = movies
        const petsType = list.filter((item)=>{
            return item.id.charAt(0) === petType.charAt(0) 
        })
        const id = `${petType.charAt(0)}-${petsType.length+1}`
        const pet ={name, weight, photo, id};
        // console.log(pet)
        this.props.store.dispatch(addMovieToList(pet))

    }
    render(){
        return (
        <div className="d-flex w-100 flex-row justify-content-center">
        <form className = "p-5 bg-success bg-opacity-50 d-flex flex-column justify-content-center fs-5 fw-bolder" onSubmit={this.handleSubmit}>
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Your Email</label>
                <div className="col-sm-9">
                <input name="email" onChange={this.handleInputChange} type="email" className="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="petName" className="col-sm-3 col-form-label">Pet Name</label>
                <div className="col-sm-9">
                <input name="petName" onChange={this.handleInputChange} type="text" className="form-control" id="petName"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="petWeight" className="col-sm-3 col-form-label">Weight</label>
                <div className="col-sm-9">
                <input name="petWeight" onChange={this.handleInputChange}type="number" className="form-control" id="petWeight" placeholder="In Pounds"/>
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="petImage" className="col-sm-3 col-form-label">Image Link</label>
                <div className="col-sm-9">
                <input name="ImageLink" onChange={this.handleInputChange} type="text" className="form-control" id="petImage"/>
                </div>
            </div>
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Pet Type</legend>
                <div className="col-sm-10">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="PetType" onChange={this.handleInputChange} id="Dog" value="Dog" />
                    <label className="form-check-label" htmlFor="Dog">
                    Dog
                    </label>
                </div>
                <div className="form-check">
                    <input name="PetType" onChange={this.handleInputChange} className="form-check-input" type="radio"  id="Cat" value="Cat"/>
                    <label className="form-check-label" htmlFor="Cat">
                    Cat
                    </label>
                </div>
                <div className="form-check disabled">
                    <input className="form-check-input" type="radio" name="PetType" onChange={this.handleInputChange} id="Rabbit" value="Rabbit" />
                    <label className="form-check-label" htmlFor="Rabbit">
                    Rabbit
                    </label>
                </div>
                </div>
            </fieldset>
            
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
        </div>
        )
    }
}
  
export default Form;
  