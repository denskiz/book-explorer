import React from "react";
import "components/Gallery.css";
let alternate =
  "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

const Gallery = ({ items }) => {
  if (items === undefined) {
    return <div>No books found...</div>;
  }
  return (
    <div className="row">
      {items.map((item, index) => {
        let { title, imageLinks, infoLink } = item.volumeInfo;
        return (
          <div className="col" key={index}>
            <div className="card mb-4 shadow-sm">
              <a href={infoLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={
                    imageLinks !== undefined ? imageLinks.thumbnail : alternate
                  }
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">{title}</p>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
