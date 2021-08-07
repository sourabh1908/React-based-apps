import React from 'react';


class SearchBar extends React.Component {
    state= {term: " "};

    onFormSubmit = event => {
      event.preventDefault();//this will stop the page to refreserh itself
      this.props.onSubmit(this.state.term)//in class cmponents we use THIS with the props while in functional components we does not
    }
    
    // onInputChange(event){
    //       console.log(event.target.value)
    // }
    render() {
        return (
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
              <div className="field">
                  <label>Image Search</label>
                  {/* we are not putting the '()' in the end of "onInputChange" because it will automatically call that function whenever our code is run  */}
                 {/* <input type="text" onChange={this.onInputChange} /> */}
                     <input
                      type="text" 
                      value={this.state.term} //this will override th eevent value
                      onChange={(e) => this.setState({ term: e.target.value})} 
                      />
              </div>
          </form>
        </div>
        )
    }
}

export default SearchBar;