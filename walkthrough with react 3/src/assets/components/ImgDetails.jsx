import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchImgs from '../hooks/fetchImg';

const ImgDetails = () => {
  const { id } = useParams();
  const [img, navFn, fetchImg, photo] = useFetchImgs();

  useEffect(() => {
    fetchImg(id);
  }, []);
  return (
    <section className="img-detail-section">
      <div className="img-detail-box">
        <img src={photo.url} alt={photo.title} className="img" />
        <div className="img-details">
          <h1>{photo.title}</h1>
          <p>{photo.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ImgDetails;
