import React from 'react';
import useFetchImgs from '../hooks/fetchImg';

const ImgGrid = () => {
  const [data, navigate] = useFetchImgs();

  return (
    <section className="img-box">
      {data ? (
        data.map((img) => {
          return (
            <img
              key={img.id}
              src={img.url}
              alt={img.title}
              className="img"
              onClick={() => navigate(img.id)}
            />
          );
        })
      ) : (
        <h3 className="error-msg">No image could be fetched.</h3>
      )}
    </section>
  );
};

export default ImgGrid;
