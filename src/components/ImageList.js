import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.images.map((image) => {
    // return <img key={id} src={urls.regular} alt={description} />;
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
  /* return (
    <div>
      {props.images.map(e => {
        return <img key={e.id} src={e.urls.regular} />;
      })}
    </div>
  ); */
};
export default ImageList;
