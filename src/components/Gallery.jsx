import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useGlobalContext } from '../context';

function Gallery() {
  const { search } = useGlobalContext();
  const url = `https://api.unsplash.com/search/users?client_id=rV1sioUtFaT7nT2kHsDaMzzVR_HVfHaalssLDyG-Gx8`;

  const response = useQuery({
    queryKey: ['image', search],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${search}`);
      return response.data;
    },
  });

  const result = response?.data?.results;
  console.log(result);

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading... </h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {result.map((item) => {
        const url = item?.profile_image?.large;
        return (
          <img
            src={url}
            alt={item.alt_description}
            className="img"
            key={item.id}
          />
        );
      })}
    </section>
  );
}

export default Gallery;
