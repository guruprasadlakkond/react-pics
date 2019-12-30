/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const ImageList = props => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div>{images}</div>;
  /* return (
    <div>
      {props.images.map(e => {
        return <img key={e.id} src={e.urls.regular} />;
      })}
    </div>
  ); */
};
export default ImageList;
