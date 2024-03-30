import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetBestPropertyQuery } from '../features/apiSlice';

export const BestProperty = () => {
  const [selectedCategory, setSelectedCategory] = useState("apartment");
  const { data, error, isLoading } = useGetBestPropertyQuery(selectedCategory);

// console.log(data);
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };
  let url = `https://villa-agency-backend.vercel.app/${data?.bestProperty[0]?.images}`

  return (

           <div className="bg-slate-100 py-16">
            {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
          <div className="container">
            <div className="flex justify-between">
              <div >
            <div className="text-lg font-bold text-red-500 ">BEST DEAL</div>
              <div className="text-third text-5xl font-extrabold mt-5">Find Your Best<br/>Deal Right Now!
               </div>
            </div>
            <div className="h-1/3 flex gap-8 mt-24">
              <div>
          {  selectedCategory == "apartment" ?
            <button className=" border outline-none rounded-lg bg-primary hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("apartment")}>Apartment</button>
          :
          <button className=" border outline-none rounded-lg bg-[#080a1c] hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("apartment")}>Apartment</button>

          }
          </div>
         <div>
          {  selectedCategory == "villa" ?
            <button className=" border outline-none rounded-lg bg-primary hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("villa")}>Villa House</button>
          :
          <button className=" border outline-none rounded-lg bg-[#080a1c] hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("villa")}>Villa House</button>

          }
          </div>
<div>
          {  selectedCategory == "penthouse" ?
            <button className=" border outline-none rounded-lg bg-primary hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("penthouse")}>Penthouse</button>
          :
          <button className=" border outline-none rounded-lg bg-[#080a1c] hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("penthouse")}>Penthouse</button>

          }
          </div>
          </div>
            </div>
    
      

      <div className="flex mt-20 gap-16">
      <div className="w-80 shadow-2xl p-4">

    <div className="flex border-b border-neutral-200 p-4 gap-5">
    <p className="text-secondary text-base font-semibold">Total Flat Space</p>
    <p className="text-third text-2xl font-bold">{data?.bestProperty[0]?.area} m2</p>
    </div>

    <div className="flex border-b border-neutral-200 p-4 gap-5">
    <p className="text-secondary text-base font-semibold">Floor Number</p>
    <p className="text-third text-2xl font-bold">{data?.bestProperty[0]?.floor_number}</p>
    </div>

    <div className="flex border-b border-neutral-200 p-4 gap-5">
    <p className="text-secondary text-base font-semibold">Number of rooms</p>
    <p className="text-third text-2xl font-bold">{data?.bestProperty[0]?.room_number}</p>
    </div>

    <div className="flex border-b border-neutral-200 p-4 gap-5">
    <p className="text-secondary text-base font-semibold">Parking Available</p>
    <p className="text-third text-2xl font-bold">{data?.bestProperty[0]?.parking_available}</p>
    </div>

    <div className="flex border-b border-neutral-200 p-4 gap-5">
    <p className="text-secondary text-base font-semibold">Payment Process</p>
    <p className="text-third text-2xl font-bold">{data?.bestProperty[0]?.payment_process}</p>
    </div>
   </div> 

<div>
  <Image src={url} alt='' width={500} height={500}></Image>
</div>
<div className="w-80">

  <p className="text-third text-lg font-semibold">Extra information about {selectedCategory}</p><br/>
  <p className="text-secondary">{data?.bestProperty[0]?.information}</p><br/><br/>
<Link href={"/contact"}>
<button className="border-2 rounded-3xl outline-none w-40 bg-[#080a1c] hover:text-primary p-3 text-white text-base" >Schedule a Visit</button>
</Link>
</div>
      </div>
      </div>
    </div>
  );
};
