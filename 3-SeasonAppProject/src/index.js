import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//FUNCTION METHOD
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     )
//     return <div>Latitude</div>
// };

//CLASS METHOD
class App extends React.Component {//here we are borrowing the methods from React into our App CLASS
    //this STATE will work same as the blow that declared in CONSTRUCTOR
    state = { lat: null, errorMessage: '' };
    // constructor(props){
    //     super(props);//we use this this because the above constructor will not override CONSTRUCTOR present in React
       
    //     //THIS is the only time we do direct assignment
    //     this.state = { lat: null, errorMessage: '' };

    //     // window.navigator.geolocation.getCurrentPosition(
    //     //     (position) => {
    //     //         //we callled setState()
    //     //         this.setState({lat: position.coords.latitude});

    //     //         //we did noot do this!!!... this is bad
    //     //         //never Do This//this.state.lat = position.coords.latitude 
    //     //     },
    //     //     (err) => {
    //     //         this.setState({errorMessage: err.message});
    //     //     }
    //     // );
    // }
    
    //it is RECOMMANDED approach for data LOADING then doing it in constructor()
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({lat: position.coords.latitude}), 
            err =>  this.setState({errorMessage: err.message})
        );    
    };

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return  <div>Error: {this.state.errorMessage}</div>
         }
          if(!this.state.errorMessage && this.state.lat){
            //return 
           //  <div>Latitude: {this.state.lat} </div>
           //here we are taking a STATE component and passig as a PROP
           return <SeasonDisplay lat={this.state.lat}/>
          }
         return <Spinner message="Please accept the Location request" /> ;
    }
  
    //React says we have to define RENDER() method
    render() {
         return (
            <div className="border red">
              {this.renderContent()}
           </div>
         );
    };    
};


ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);