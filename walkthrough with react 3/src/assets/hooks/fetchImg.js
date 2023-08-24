import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useFetchImgs = () => {
  const navigate = useNavigate();
  const [imgData, setImgData] = useState([]);
  const [img, setImg] = useState({});
  const fetchImgData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=20`
      );
      setImgData(data.photos);
    } catch (error) {
      setImgData(null);
    }
  };

  const fetchParticularImg = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/photos/${id}`
      );
      setImg(data.photo);
    } catch (error) {
      setImg(null);
    }
  };

  const handleNavigation = (id) => {
    navigate(`/img/${id}`);
  };

  useEffect(() => {
    fetchImgData();
  }, []);
  return [imgData, handleNavigation, fetchParticularImg, img];
};

export default useFetchImgs;
