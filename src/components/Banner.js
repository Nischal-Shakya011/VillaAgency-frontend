
import React from "react";
import Image from "next/image";
import { useGetBannerQuery } from '../features/apiSlice';
import Slider from "react-slick";
  

export const Banner = () => {
  const { data, error, isLoading } = useGetBannerQuery();
// console.log(data);
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

};
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
        <div className="w-full">
      <Slider {...settings}>
     
     {data.images.map((res) => {
        let url = `https://villa-agency-backend.vercel.app/${res}`
        // console.log(res);
        return<>
          <div key={res.id}>
       <Image src={url} alt='' className="w-full h-screen" width={200} height={200} unoptimized></Image> 
        </div>
        </>
      
  })}
    </Slider>
    </div>
    )

};