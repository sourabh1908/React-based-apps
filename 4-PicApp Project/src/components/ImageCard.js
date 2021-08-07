import React from 'react';
 class ImageCard extends React.Component {
     constructor(props){
         super(props);

         this.state = {spans: 0};

         this.imageRef = React.createRef();//this will reference the rendered individual IMage
     }

     componentDidMount() {
       this.imageRef.current.addEventListener('load', this.setSpans);//it means that image is downloaded and we are ready to get the actual height of image
     }

     // now we can get the correct clientHeight of the image
     setSpans = () => {
        //  console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height/10) + 1;

        this.setState({ spans: spans });
     }

     render(){
         return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={this.props.image.description} src={this.props.image.urls.regular} />
            </div>
         );
     }
 }

 export default ImageCard;