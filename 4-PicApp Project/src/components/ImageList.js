import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map( imgs => {
        return <ImageCard key={imgs.id} image={imgs} />//this path is taken to acess the API
    });//we have to add the KEY property to the root element ,  in our case root element is <img> tag

    return <div className="images-list"> {images} </div>
};

export default ImageList;