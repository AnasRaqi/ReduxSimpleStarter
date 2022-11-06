import React, {Component} from "react";

class SearchBar extends Component { // gives functionalities from react components. 
    constructor(props) {
        super(props); // super calls the parent component. 
        this.state = {term: ""}; // initialize state. term (search term). 
    }
    render() { // method each class should have it. 
        return (
        <div className="search-bar">
         <input 
            value = {this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
        );
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;


