import React from "react";
import Image from "next/image";
import areaImg from '../assets/area.png'
import contractImg from '../assets/contract.png'
import paymentImg from '../assets/payment.png'
import safetyImg from '../assets/safety.png'
import { useState } from "react";
import { useGetFeaturedQuery } from '../features/apiSlice';

export const Featured = () => {
  const { data, error, isLoading } = useGetFeaturedQuery();
// console.log(data);

    const [isToggled1, setToggled1] = useState(false);
    const [isToggled2, setToggled2] = useState(false);
    const [isToggled3, setToggled3] = useState(false);
  
    const handleToggle1 = () => {
      setToggled1(!isToggled1)
      setToggled2(false)
      setToggled3(false)
    };
    const handleToggle2 = () => {
        setToggled2(!isToggled2)
        setToggled1(false)
        setToggled3(false)
      };
      const handleToggle3 = () => {
        setToggled3(!isToggled3)
        setToggled1(false)
        setToggled2(false)
      };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  let url = `https://villa-agency-backend.vercel.app/${data[0].images}`;
  return (
    <div className=" container flex justify-center gap-14 mt-32 mb-10">
   
    <div className="w-80 ">
   <Image src={url} alt='' width={350} height={400}></Image>
   </div>
   <div className="w-1/3 ">
    <div className="text-lg font-bold text-red-500 ">FEATURED</div>
   <div className="text-third text-5xl font-extrabold mt-5">Best<br/>Apartment and<br/>Sea View</div>
   <div className="mt-14 bg-slate-100 p-3 rounded-xl">
    {
        isToggled1 ?
        <p onClick={handleToggle1} className= 'text-primary cursor-pointer text-lg font-semibold border-b border-neutral-200 p-3'>Best useful links ?</p>
        :
        <p onClick={handleToggle1} className='cursor-pointer text-lg font-semibold border-b border-neutral-200 p-3'>Best useful links ?</p>
        }
      {
        isToggled1 &&
        <p className="mb-5 text-lg p-3"> Get the best villa website template in HTML CSS <br/> and Bootstrap for your business. <br/>TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.</p>
       
}
{
        isToggled2 ?
        <p onClick={handleToggle2} className= 'text-primary cursor-pointer text-lg font-semibold border-b border-neutral-200 p-3'>How does this work ?</p>
        :
        <p onClick={handleToggle2} className='cursor-pointer text-lg font-semibold border-b border-neutral-200 p-3'>How does this work ?</p>
        }
      {
        isToggled2 &&
        <p className="mb-5 text-lg p-3"> Get the best villa website template in HTML CSS <br/> and Bootstrap for your business. <br/>TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.</p>
       
}
{
        isToggled3 ?
        <p onClick={handleToggle3} className= 'text-primary cursor-pointer text-lg font-semibold  p-3'>Why is Villa Agency the Best ?</p>
        :
        <p onClick={handleToggle3} className='cursor-pointer text-lg font-semibold p-3'>Why is Villa Agency the Best ?</p>
        }
      {
        isToggled3 &&
        <p className="mb-5 text-lg p-3"> Get the best villa website template in HTML CSS <br/> and Bootstrap for your business. <br/>TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.</p>
       
}
   </div>
   </div>
   <div className="w-80 shadow-2xl p-4">
    <div className="flex border-b border-neutral-200 p-7 gap-8">
<Image src={areaImg} width={60} height={50}></Image>
<div>
    <p className="text-third text-2xl font-bold">{data[0].area} m2</p>
    <p className="text-secondary text-lg font-semibold">Total Flat Space</p>
</div>
    </div>
    <div className="flex border-b border-neutral-200 p-7 gap-8">
<Image src={contractImg} width={60} height={50}></Image>
<div>
    <p className="text-third text-2xl font-bold">{data[0].contract}</p>
    <p className="text-secondary text-lg font-semibold">Contract</p>
</div>
    </div>
    <div className="flex border-b border-neutral-200 p-7 gap-8">
<Image src={paymentImg} width={60} height={50}></Image>
<div>
    <p className="text-third text-2xl font-bold">{data[0].payment_process}</p>
    <p className="text-secondary text-lg font-semibold">Payment Process</p>
</div>
    </div>
    <div className="flex p-7 gap-8">
<Image src={safetyImg} width={60} height={50}></Image>
<div>
    <p className="text-third text-2xl font-bold">24/7 under control</p>
    <p className="text-secondary text-lg font-semibold">Safety</p>
</div>
    </div>
   </div>
    </div>
  );
};