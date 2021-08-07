import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';


class App extends React.Component {
      state= { images: [] };

  onSearchSubmit = async term => {//here we are doing API request using AXIOS
       const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: term }, 
                headers: {
                  Authorization: 'Client-ID JlRh3QMp5fYypRJEEmL6hWGjG67EdOahZ2eBGOt-KyY'
                }
             });

           this.setState({ images: response.data.results });
   }
    render(){
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                {/* in place of 'onSubmit' we can use anything */}
                 <SearchBar onSubmit={this.onSearchSubmit}/>
                 Found: {this.state.images.length} images
                 <ImageList images={this.state.images}/>
            </div>
            );
    }
}


export default App;